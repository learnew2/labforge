#!/bin/bash
USER_LOGIN_CLIENT="ln2"
REALM_ROLES=(
    "cluster-admin"
    "deployment-admin"
    "deployment-create"
    "group-read"
    "image-admin"
    "image-view"
    "role-manage"
    "role-read"
    "user-read"
    "validate-users"
    "grafana-admin"
    "grafana-editor"
    "grafana-viewer"
)
REALM_CLIENTS=(
    "cluster-manager"
    "deployment-api"
    "frontend-service"
    "kroki-proxy"
    "ln2"
    "auth-service"
)
USERS_ROLES=(
    "validate-users"
    "validate-users,role-read,group-read,role-manage,cluster-admin,user-read"
    "validate-users,group-read,user-read"
    "validate-users,deployment-admin"
    ""
    "validate-users,role-read,group-read,role-manage,user-read"
    "image-view,image-read"
)

cd /opt/keycloak/bin/
./kcadm.sh config credentials --server http://localhost:8080 --realm master --user $KC_BOOTSTRAP_ADMIN_USERNAME --password $KC_BOOTSTRAP_ADMIN_PASSWORD
echo "Login successful!"
./kcadm.sh get realms --offset 0 --limit 100 | grep -E "\"realm\".*\"$KEYCLOAK_REALM\"" &>/dev/null
if [ $? -eq 1 ]; then
    echo "Realm $KEYCLOAK_REALM is not found"
    ./kcadm.sh create realms -s realm=$KEYCLOAK_REALM -s enabled=true
    sleep 5
    ./kcadm.sh get realms | grep -E "\"realm\".*\"$KEYCLOAK_REALM\"" &>/dev/null
    if [ $? -eq 1 ]; then
        echo "Failed to create realm!"
        exit 1
    fi
else
    echo "Realm exists!"
fi

rolesList=$(./kcadm.sh get-roles --limit 100 -r $KEYCLOAK_REALM)
if [ $? -ne 0 ]; then
    echo "Failed to get roles"
    exit 1
fi

for role in "${REALM_ROLES[@]}"; do
    echo $rolesList | grep -E "\"name\"[ ]+\:[ ]+\"$role\"" &> /dev/null
    if [ $? -ne 0 ]; then
        echo "Role $role does not exists!"
        ./kcadm.sh create roles -r $KEYCLOAK_REALM -s name=$role -o
    else
        echo "Role $role exists!"
    fi
done

clientsList=$(./kcadm.sh get clients --limit 100 -r $KEYCLOAK_REALM)
if [ $? -ne 0 ]; then
    echo "Failed to get clients"
    exit 1
fi
echo $clientsList

for client in "${REALM_CLIENTS[@]}"; do
    echo $clientsList | grep -E "\"clientId\"[ ]+\:[ ]+\"$client\"" &> /dev/null
    if [ $? -ne 0 ]; then
        echo "Client $client does not exists!"
        if [ "$USER_LOGIN_CLIENT" = "$client" ]; then
            ./kcadm.sh create clients -r $KEYCLOAK_REALM -s 'name=AuthPortal' -s clientId=$client -s 'redirectUris=["*"]' -s 'webOrigins=["*"]' -s 'standardFlowEnabled=true' -s 'serviceAccountsEnabled=false' -s baseUrl="$FRONTEND_HOSTNAME"
        else
            ./kcadm.sh create clients -r $KEYCLOAK_REALM -s name=$client -s clientId=$client -s 'serviceAccountsEnabled=true' -s 'standardFlowEnabled=false'
        fi
    else
        echo "Client $client exists!"
    fi
done

echo "Applying roles"
for (( i = 0; i <${#REALM_CLIENTS[@]}; i++)); do
    clientName="${REALM_CLIENTS[$i]}"
    echo $clientName
    if [[ "${USERS_ROLES[$i]}" = "" ]]; then
        echo "Roles is not set for this client"
    else
        IFS=',' read -ra roles_row <<< "${USERS_ROLES[$i]}"
        for role in "${roles_row[@]}"; do
            ./kcadm.sh add-roles -r $KEYCLOAK_REALM --uusername service-account-$clientName --rolename $role
        done
    fi
done

./kcadm.sh get -r ln2 clients --limit 100 --offset 0 --fields 'clientId,name,secret' > /tmp/clients.json
