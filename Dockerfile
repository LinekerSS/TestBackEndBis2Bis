FROM mysql

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]