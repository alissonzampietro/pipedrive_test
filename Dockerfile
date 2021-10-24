FROM node:14-alpine

EXPOSE 3000
EXPOSE 3001

WORKDIR /app

CMD ["node", "dist/src/index.js"]
