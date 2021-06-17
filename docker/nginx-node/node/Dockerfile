FROM node:15.14.0-alpine3.10
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "src/index.js"]