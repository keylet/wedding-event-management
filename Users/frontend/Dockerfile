# Stage 1: build con Node 20
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
RUN npm run build

# Stage 2: servir con Nginx
FROM nginx:stable-alpine

# Limpia la carpeta de configs y vuélvela a crear
RUN rm -rf /etc/nginx/conf.d && mkdir /etc/nginx/conf.d

# Copia estáticos
COPY --from=builder /app/dist /usr/share/nginx/html

# La configuración la montamos por Compose, así no la COPY aquí

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
