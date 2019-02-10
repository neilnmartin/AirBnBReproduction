FROM node:8

COPY . /Header-Module
WORKDIR /Header-Module

RUN npm install
RUN npm run build

EXPOSE 3002

CMD ["npm", "start"]