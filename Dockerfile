FROM node:lts-alpine

RUN npm install -g http-server
COPY ./script/dev.sh /

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
