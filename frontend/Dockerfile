FROM node:20-alpine as BUILD_IMAGE

WORKDIR /app/react-app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run","host" ]









