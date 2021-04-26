FROM node:15

WORKDIR /usr/src/app

RUN apt update && apt install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN npm install express --save && \
    npm i mysql --save

EXPOSE 3000

# ENTRYPOINT [ "node" ]
# CMD [ "index.js" ]
