#!/usr/bin/bash

cd ChillPill
git pull
npm run build
pm2 restart chillpill