FROM node:lts
RUN mkdir /usr/src/server
WORKDIR /usr/src/server

ENV PATH /usr/src/server/node_modules/.bin:$PATH

COPY package.json /usr/src/server/package.json
COPY yarn.lock /usr/src/server/yarn.lock
COPY . /usr/src/server

RUN npm install -g concurrently --unsafe-perm
RUN yarn install

CMD yarn run migrate:up && concurrently "yarn run dev" "yarn run prisma studio"
