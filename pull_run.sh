#!/usr/bin/bash

bash
cd ChillPill
git pull
npm --prefix /home/ubuntu/ChillPill run build
pm2 restart chillpill