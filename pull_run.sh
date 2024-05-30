#!/usr/bin/bash

cd /home/ubuntu/ChillPill
git pull
npm --prefix /home/ubuntu/ChillPill install
npm --prefix /home/ubuntu/ChillPill i --save-dev @types/howler
npm --prefix /home/ubuntu/ChillPill run build
pm2 restart chillpill