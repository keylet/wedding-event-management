FROM node:20-alpine

# 1) Directorio de trabajo
WORKDIR /usr/src/app

# 2) Copia package.json e instala dependencias
COPY package*.json ./
RUN npm install

# 3) Copia el resto del código
COPY . .

# 4) Expone el puerto (opcional, según lo uses)
# EXPOSE 3008

# 5) Arranca la app con el script "start"
CMD ["npm", "start"]
