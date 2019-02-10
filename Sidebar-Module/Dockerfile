# FROM node:carbon

# WORKDIR /
# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3005

# CMD ["npm","run","start"]

##############################

FROM node:8

COPY . /Sidebar-Module
WORKDIR /Sidebar-Module

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]