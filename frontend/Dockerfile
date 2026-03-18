FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Expose le serveur Vite au réseau Docker
CMD ["npm", "run", "dev", "--", "--host"]