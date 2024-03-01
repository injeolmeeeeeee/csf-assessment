FROM node:21 as builder

WORKDIR /builder/client

COPY client/*.json .

RUN npm install -g @angular/cli

COPY client .

RUN npm ci && ng build

FROM node:21

RUN npm install -g http-server

WORKDIR /app

COPY --from=builder /builder/client/dist/client-side/browser .

ENV PORT=8080

EXPOSE ${PORT}

ENTRYPOINT http-server --port ${PORT}