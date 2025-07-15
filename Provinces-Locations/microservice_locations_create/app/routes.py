from fastapi import APIRouter, HTTPException
from .models import LocationCreate
from .db import db
from bson import ObjectId

router = APIRouter()
collection = db.get_collection("locations")

# Acepta POST en /locations y /locations/
@router.post("/locations", status_code=201)
@router.post("/locations/", status_code=201)
async def create_location(loc: LocationCreate):
    data = loc.dict()
    result = await collection.insert_one(data)
    new_doc = await collection.find_one({"_id": result.inserted_id})
    if not new_doc:
        raise HTTPException(status_code=500, detail="Error creating location")
    new_doc["_id"] = str(new_doc["_id"])
    return new_doc
