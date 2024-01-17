FROM node:20-alpine

WORKDIR /backend
COPY package*.json ./
COPY yarn.lock ./
# sets env to node_modules in app
ENV PATH /backend/node_modules/.bin:$PATH

RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp
COPY . .

EXPOSE 5000

CMD [ "npm" ,"run" ,"prod" ]