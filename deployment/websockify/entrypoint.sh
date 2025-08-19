#!/bin/bash
python -m websockify --token-source=/tokens.cfg --token-plugin=TokenFile 6080
