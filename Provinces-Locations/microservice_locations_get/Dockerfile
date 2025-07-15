# Usar una imagen base de Python 3.11 (ligera, optimizada)
FROM python:3.11-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo de dependencias primero (esto mejora la cacheabilidad de Docker)
COPY requirements.txt .

# Instalar las dependencias de la aplicación
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente de la aplicación
COPY app ./app

# Exponer el puerto que se usará para la app (esto es opcional pero útil si usas docker ps)
EXPOSE 4002

# Comando para ejecutar el servidor Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "4002"]
