FROM node:16-bullseye-slim
EXPOSE 3000
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
