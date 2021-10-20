FROM node:14-alpine

EXPOSE 3000

WORKDIR /app

CMD ["node", "dist/src/index.js"]
