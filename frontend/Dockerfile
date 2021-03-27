FROM node:14-alpine3.10 as builder

LABEL version="1.0"
LABEL description="Frontend Production image for the Memories-MicroService App"

WORKDIR /app

COPY ./package.json ./

# USER node
# COPY --chown=node:node . /app
RUN npm install

ARG REACT_APP_CLIENT_ID

ENV REACT_APP_CLIENT_ID=$REACT_APP_CLIENT_ID

COPY . .

RUN npm run build

FROM nginx

# EXPOSE 5000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html