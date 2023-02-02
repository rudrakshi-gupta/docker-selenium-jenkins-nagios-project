FROM node:10

WORKDIR /usr/src/data

COPY package*.json ./

RUN npm install

EXPOSE 3090

CMD ["npm", "run","dev"]