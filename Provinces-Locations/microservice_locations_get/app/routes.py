from fastapi import APIRouter
from typing import List
from .models import Location
from .db import db

router = APIRouter()

# Obtenemos la colección “locations” desde db.py
db_collection = db.get_collection("locations")

@router.get("/locations/", response_model=List[Location])
async def get_locations():
    docs = await db_collection.find().to_list(100)
    results = []
    for doc in docs:
        loc = Location(
            _id=str(doc["_id"]),
            name=doc.get("name"),
            province_id=doc.get("provinceCode"),  # mapea provinceCode → province_id
            type=doc.get("type"),
            population=doc.get("population"),
            coords=doc.get("coords"),
        )
        results.append(loc)
    return results
