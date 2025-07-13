FROM node:20-alpine

# 1) Directorio de trabajo
WORKDIR /usr/src/app

# 2) Copia package.json e instala
COPY package*.json ./
RUN npm install

# 3) Copia el resto del código
COPY . .

# 4) (opcional) build si usas TS u otro transpilador
# RUN npm run build

# 5) Arranca la app directamente
CMD ["npm", "run", "start:update"]
