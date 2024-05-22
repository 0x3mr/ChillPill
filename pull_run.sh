#!/usr/bin/bash

cd /home/ubuntu/ChillPill
git pull
npm --prefix /home/ubuntu/ChillPill run build
pm2 restart chillpill