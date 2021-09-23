FROM node:12.18.2-alpine3.11

WORKDIR /app

ADD package*.json ./
COPY . /app
RUN npm ci
