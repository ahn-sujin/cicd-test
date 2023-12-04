FROM node:16 
# FROM node:lts-alpine

# WORKDIR /app
# COPY .npmrc .npmrc
COPY package*.json ./
RUN npm install
COPY . .
# RUN rm -f .npmrc

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]