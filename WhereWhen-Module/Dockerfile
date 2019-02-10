# FROM node:carbon

# WORKDIR /
# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3005

# CMD ["npm","run","start"]

##############################

FROM node:8

COPY . /WhereWhen-Module
WORKDIR /WhereWhen-Module

RUN npm install
RUN npm run build

EXPOSE 3003

CMD ["npm","start"]