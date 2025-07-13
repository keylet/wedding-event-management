# Usa una imagen Node.js ligera
FROM node:20-alpine

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar dependencias primero para cacheo
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto expuesto
EXPOSE 3010  

# Comando de inicio
CMD ["node", "src/server.js"]
