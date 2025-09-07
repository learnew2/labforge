{-# LANGUAGE QuasiQuotes #-}
module Templates.Components
  ( genericDeploymentForm
  , genericGroupForm
  , genericGroupActionFormData
  , genericGroupActionForm
  , genericInstanceActionFormData
  , genericInstanceActionForm
  ) where

import           Api.Keycloak.Models.Group
import           Data.Text                 (Text)
import           Text.Blaze.Html
import           Text.Hamlet

genericInstanceActionFormData :: Html
genericInstanceActionFormData = [shamlet|
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data("instanceActionFormData", (instanceId) => ({
      instanceId: instanceId,
      action: "makesnap",
      snapname: "",
      sendRequest() {
        if (this.snapname.length > 0 && (this.action == "makesnap" || this.action == "delsnap" || this.action == "rollback")) {
          let url = "/api/deployment/instances/" + instanceId + "/snapshot?snapname=" + encodeURIComponent(this.snapname) + (this.action == "delsnap" ? "&delete" : "") + (this.action == "rollback" ? "&rollback" : "")
          fetch(url).then(r => {
            if (r.ok) {
              location.reload();
            } else {
              return r.json().then(resp => {throw new Error(resp.error)})
            }
          }).catch(err => {
            alert("Ошибка: " + err)
            console.log(err);
          });
        }
      }
    }))
  })
|]

genericGroupActionFormData :: FoundGroup -> Html
genericGroupActionFormData (FoundGroup { groupName=defaultGroup }) = [shamlet|
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data("groupDeploymentFormData", (deploymentId) => ({
      deploymentId: deploymentId,
      action: "deploy",
      group: "#{preEscapedToMarkup defaultGroup}",
      snapname: "",
      sendRequest() {
        if (this.action == "deploy" || this.action == "destroy") {
          let url = "/api/deployment/deployments/" + deploymentId + "/" + this.action + "/group?group=" + encodeURIComponent(this.group)
          fetch(url).then(r => {
            if (r.ok) {
              location.reload();
            } else {
              return r.json().then(resp => {throw new Error(resp.error)})
            }
          }).catch(err => {
            alert("Ошибка: " + err)
            console.log(err);
          });
        }
        if (this.action == "turnon" || this.action == "turnoff") {
          let url = "/api/deployment/deployments/" + deploymentId + "/power/group?group=" + encodeURIComponent(this.group) + (this.action == "turnon" ? "&on" : "")
          fetch(url).then(r => {
            if (r.ok) {
              location.reload();
            } else {
              return r.json().then(resp => {throw new Error(resp.error)})
            }
          }).catch(err => {
            alert("Ошибка: " + err)
            console.log(err);
          });
        }
        if (this.snapname.length > 0 && (this.action == "makesnap" || this.action == "delsnap" || this.action == "rollback")) {
          let url = "/api/deployment/deployments/" + deploymentId + "/snapshot/group?group=" + encodeURIComponent(this.group) + "&snapname=" + encodeURIComponent(this.snapname) + (this.action == "delsnap" ? "&delete" : "") + (this.action == "rollback" ? "&rollback" : "")
          fetch(url).then(r => {
            if (r.ok) {
              location.reload();
            } else {
              return r.json().then(resp => {throw new Error(resp.error)})
            }
          }).catch(err => {
            alert("Ошибка: " + err)
            console.log(err);
          });
        }
      }
    }))
  })
|]

genericInstanceActionForm :: Text -> Html
genericInstanceActionForm instanceKey = [shamlet|
<form .form @submit.prevent="" x-data="instanceActionFormData('#{preEscapedToMarkup instanceKey}')">
  <label .label> Выберите действие
  <div .control>
    <div .select>
      <select x-model="action">
        <option disabled> Выберите вариант
        <option value=makesnap> Сделать снапшот
        <option value=delsnap> Удалить снапшот
        <option value=rollback> Откатить стенды
  <template *{[("x-if", "action == 'makesnap' || action == 'delsnap' || action == 'rollback'")]}>
    <div>
      <label .label> Название снапшота
      <div .control>
        <input .input type=text x-model="snapname">
  <button .button.is-fullwidth @click="sendRequest"> Выполнить
|]

genericGroupActionForm :: Int -> [FoundGroup] -> Html
genericGroupActionForm templateId groups = [shamlet|
<form .form @submit.prevent="" x-data="groupDeploymentFormData(#{preEscapedToMarkup templateId})">
  <label .label> Целевая группа Keycloak
  <div .control>
    ^{genericGroupForm [("x-model", "group")] groups}
  <label .label> Выберите действие
  <div .control>
    <div .select>
      <select x-model="action">
        <option disabled> Выберите вариант
        <option value=deploy> Создать стенд
        <option value=destroy> Удалить стенд
        <option value=turnoff> Выключить стенд
        <option value=turnon> Включить стенд
        <option value=makesnap> Сделать снапшот
        <option value=delsnap> Удалить снапшот
        <option value=rollback> Откатить стенды
  <template *{[("x-if", "action == 'makesnap' || action == 'delsnap' || action == 'rollback'")]}>
    <div>
      <label .label> Название снапшота
      <div .control>
        <input .input type=text x-model="snapname">
  <button .button.is-fullwidth @click="sendRequest"> Выполнить
|]

genericGroupForm :: [(String, String)] -> [FoundGroup] -> Html
genericGroupForm params groups = [shamlet|
<div .select>
  <select *{params}>
    <option disabled> Выберите вариант
    $forall (FoundGroup {groupName=groupName}) <- groups
      <option value="#{groupName}"> #{groupName}
|]

genericDeploymentForm = let
  indexKey :: [(String, String)]
  indexKey = [(":key", "index")]

  netIndexKey :: [(String, String)]
  netIndexKey = [(":key", "netIndex")]

  netSelectBind :: [(String, String)]
  netSelectBind = [(":selected", "vms[index]['networks'][netIndex]['type'] == avtype")]

  netNumberBind :: [(String, String)]
  netNumberBind = [(":selected", "vms[index]['networks'][netIndex]['number'] == i - 1")]

  templateBind :: [(String, String)]
  templateBind = [(":selected", "vms[index]['clone_from'] == template")]
  in [shamlet|
<div .container x-data>
  <form .form.is-fullwidth x-data="formData" @submit.prevent="">
    <div .control>
      <label .label> Имя стенда
      <input .input type=text x-model="title">
    <template x-for="(obj, index) in vms" *{indexKey}>
      <template x-if="vms[index]">
        <div .box>
          <label .label> Название VM
          <div .control>
            <input .input type="text" x-model="vms[index]['name']">
          <label .label> Клонировать из
          <div .control>
            <div .select>
              <select x-model="vms[index]['clone_from']">
                <option value="" disabled> Выберите шаблон
                <template x-for="template in templates">
                  <option x-text="template" *{templateBind}>
          <label .label> Время ожидания после включения (в секундах)
          <div .control>
            <input .input type=number x-model.number="vms[index]['delay']">
          <label .label> Кол-во ядер
          <div .control>
            <input .input type=number x-model.number="vms[index]['cores']">
          <label .label> Кол-во ОЗУ (в МБ)
          <div .control>
            <input .input type=number x-model.number="vms[index]['memory']">
          <label .label> Лимит нагрузки CPU (в ядрах)
          <div .control>
            <input .input type=number x-model.number="vms[index]['cpu_limit']">
          <div .control>
            <label .checkbox>
              <input .checkbox type=checkbox x-model="vms[index]['available']">
              Доступна пользователю
          <div .control>
            <label .checkbox>
              <input .checkbox type=checkbox x-model="vms[index]['running']">
              Включить VM при развертывании
          <div .is-flex.is-flex-direction-row.is-align-items-center.is-fullwidth x-data="netForm">
            <input .input type="text" x-model="netname">
            <div .select>
              <select x-model="nettype">
                <template x-for="avtype in interfaces">
                  <option x-text="avtype">
            <button .button @click="addNetwork(vms[index])"> Подключить
          <template x-for="(netObj, netIndex) in vms[index]['networks']" x-data="netForm">
            <div .is-flex.is-flex-direction-row.is-align-items-center.is-fullwidth>
              <input .input type="text" x-model="vms[index]['networks'][netIndex]['name']">
              <div .select>
                <select x-model.number="vms[index]['networks'][netIndex]['number']">
                  <option value=""> -
                  <template x-for="i in 33">
                    <option x-text="i - 1" *{netNumberBind}>
              <div .select>
                <select x-model="vms[index]['networks'][netIndex]['type']">
                  <template x-for="avtype in interfaces">
                    <option x-text="avtype" *{netSelectBind}>
              <button .button @click="removeNetwork(vms[index], netObj)"> Удалить
          <div .is-flex.is-flex-direction-row.is-align-items-center>
            <div .p-3>
              <button .button.is-danger @click="deleteVM(index)"> Удалить VM
            <div .p-3>
              <button .button @click="moveVM(index, -1)"> Передвинуть выше
            <div .p-3>
              <button .button @click="moveVM(index, 1)"> Передвинуть ниже
    <div .block>
      <button .button.is-fullwidth @click="addVM()"> Добавить ВМ
    <div .block x-data="{input: ''}">
      <h2 .subtitle.is-5> Список существующих сетей
      <p> Такие сети не создаются, а используют bridge с тем же именем.
      <div .control>
        <label .label> Имя сети
        <input .input type="text" x-model="input">
      <button .button.is-fullwidth @click="if (input.length > 0 && !existingNetworks.includes(input)) { existingNetworks.push(input); input = '' }"}> Добавить
      <template x-for="(net, netIndex) in existingNetworks" *{netIndexKey}>
        <div .is-flex.is-flex-direction-row.is-align-items-center.is-fullwidth>
          <p .pr-5 x-text="net">
          <button .button.is-danger @click="removeENet(netIndex)"> Удалить
    <button .button.is-success.is-fullwidth @click="sendRequest"> Создать стенд
|]
