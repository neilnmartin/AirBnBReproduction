# FROM node:carbon

# WORKDIR /
# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3005

# CMD ["npm","run","start"]

##############################

FROM node:8

COPY . /Review-Module
WORKDIR /Review-Module

RUN npm install
RUN npm run build

EXPOSE 3004

CMD ["npm", "run", "server-dev"]