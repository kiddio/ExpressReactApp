FROM node:16.17-alpine

COPY . /ExpressReactApp
WORKDIR /ExpressReactApp
RUN yarn

CMD yarn start