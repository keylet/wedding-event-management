from motor.motor_asyncio import AsyncIOMotorClient
import os

# Lee la URL desde .env o usa el valor por defecto
MONGO_URL = os.getenv(
    "MONGO_URL",
    "mongodb://admin:pass@mongo:27017/provinces_locations_db?authSource=admin"
)

# Crea el cliente y extrae la base de datos por defecto
client = AsyncIOMotorClient(MONGO_URL)
db = client.get_default_database()
