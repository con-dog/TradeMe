FROM node:current-alpine3.21

WORKDIR /project
COPY . .
RUN npm install -g pnpm && \
    pnpm install

CMD ["pnpm", "start"]