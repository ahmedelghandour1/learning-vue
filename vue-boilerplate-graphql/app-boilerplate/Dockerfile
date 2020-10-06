# FROM node:carbon

# Create app directory
WO# RKDIR /app

# Install app dependencies
RU# N npm -g install serve
# A wildcard is used to ensure both package.json AND package-lock.json are copied
CO# PY package*.json ./

RU# N npm install

# Bundle app source
CO# PY . /app
#Build react/vue/angular bundle static files
RU# N npm run build

EX# POSE 8080
# serve dist folder on port 8080
CM# D ["serve", "-s", "dist", "-p", "8080"]
