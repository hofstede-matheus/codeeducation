FROM node:15.14.0-alpine3.10
WORKDIR /usr/src/app

RUN apk add --no-cache wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "src/index.js"]