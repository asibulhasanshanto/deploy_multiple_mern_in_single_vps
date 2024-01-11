FROM node:20-alpine as react-build
WORKDIR /client

# sets env to node_modules in app
ENV PATH /client/node_modules/.bin:$PATH

COPY package.json /client/package.json
COPY yarn.lock /client/yarn.lock


RUN yarn
COPY . /client
RUN yarn  build

FROM nginx
COPY --from=react-build /client/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 777 /usr/share/nginx/html/assets/
CMD ["nginx", "-g", "daemon off;"]