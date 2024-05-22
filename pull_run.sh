#!/usr/bin/bash

cd Chillpill
git pull
npm run build
pm2 restart chillpill