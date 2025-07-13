FROM node:20-alpine

# 1) Directorio de trabajo
WORKDIR /usr/src/app

# 2) Copia package.json e instala
COPY package*.json ./
RUN npm install

# 3) Copia y habilita el script de espera
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

# 4) Copia el resto del código
COPY . .

# 5) (opcional) build si usas TS u otro transpilador
# RUN npm run build

# 6) Usa wait-for-it antes de arrancar la app
CMD ["./wait-for-it.sh", "mysql-db:3306", "--", "npm", "run", "start:update"]
