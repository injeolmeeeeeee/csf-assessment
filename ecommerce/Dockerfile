FROM node:21 as builder

RUN npm i -g @angular/cli

WORKDIR /builder

COPY *.json .
COPY src .

RUN npm ci && ng build


FROM node:21

RUN npm i -g http-server

WORKDIR /app
COPY --from=builder /builder/ecommerce/dist/client/browser/ . 

ENV PORT=8080

EXPOSE ${PORT}

ENTRYPOINT http-server --port ${PORT}