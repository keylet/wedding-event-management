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

# Copiar el script de espera
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Puerto expuesto
EXPOSE 3006  # Cambia este valor según tu servicio

# Comando de inicio
CMD ["sh", "-c", "./wait-for-it.sh mysql-db:3306 --strict --timeout=30 -- node src/server.js"]
