FROM node:14-alpine3.10

LABEL version="1.0"
LABEL description="Backend Production image for the Memories-MicroService App"

WORKDIR /app

COPY ["package.json","package-lock.json", "./"]

RUN npm install

USER node
COPY --chown=node:node . /app

COPY . .

CMD [ "npm", "run", "start" ]