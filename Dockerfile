FROM node:14-alpine
WORKDIR /app
EXPOSE 3000
EXPOSE 3001

COPY . /app/

CMD ["npm", "run", "dev"]
