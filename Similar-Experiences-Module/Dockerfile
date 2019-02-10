FROM node:8

COPY . /Similar-Experiences-Module
WORKDIR /Similar-Experiences-Module

RUN npm install
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]