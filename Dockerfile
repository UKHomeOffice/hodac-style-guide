FROM jekyll/jekyll

RUN \
    apk update && \
    apk add --no-cache \
    autoconf \
    automake \
    bash \
    build-base \
    m4 \
    python \
    unzip

RUN \
    npm install -g node-gyp gulp napa && \
    node-gyp install

RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/package.json
RUN npm install
ADD . /app
RUN npm run postinstall
RUN npm run build:assets
RUN mkdir -p _site && chmod -R 777 _site
