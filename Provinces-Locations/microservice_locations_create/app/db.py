from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()
client = AsyncIOMotorClient(os.getenv("MONGO_URI"), maxPoolSize=10)
db = client[os.getenv("MONGO_DATABASE")]
