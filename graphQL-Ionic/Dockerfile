FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8001

CMD [ "ionic", "serve" ]
