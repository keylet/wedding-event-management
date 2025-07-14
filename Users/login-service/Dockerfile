# Usa una imagen Node.js ligera
FROM node:20-alpine

# Crear directorio de la app dentro del contenedor
WORKDIR /usr/src/app

# Copiar solo los archivos de dependencias para aprovechar el cacheo de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Exponer el puerto en el que el servicio va a escuchar
EXPOSE 3007  

# Comando de inicio para ejecutar el servidor
CMD ["node", "src/server.js"]
