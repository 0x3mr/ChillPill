#!/usr/bin/bash

# This script updates the 'ChillPill' project by pulling changes from Git,
# installing dependencies, building the project, and restarting it with pm2.

cd /home/ubuntu/ChillPill
git pull
npm --prefix /home/ubuntu/ChillPill install
npm --prefix /home/ubuntu/ChillPill i --save-dev @types/howler
npm --prefix /home/ubuntu/ChillPill run build
pm2 restart chillpill