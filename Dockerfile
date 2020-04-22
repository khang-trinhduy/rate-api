FROM node:12.16.2-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install

# If you are building your code for production use this one instead
RUN npm ci --only=production

# COPY config.docker.json config.json

COPY . .

EXPOSE 3000

CMD ["npm", "start"]