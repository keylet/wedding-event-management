# Usa una imagen oficial de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia package.json e instala las dependencias dentro del contenedor
COPY package*.json ./
RUN npm install  # Instala todas las dependencias, incluidas las de desarrollo

# Copia el resto del código fuente
COPY . .

# Expone el puerto del microservicio
EXPOSE 3006

# Comando de inicio
CMD ["node", "src/server.js"]

