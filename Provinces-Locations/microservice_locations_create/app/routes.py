from fastapi import APIRouter, HTTPException
from .models import LocationCreate
from .db import db
from bson import ObjectId

router = APIRouter()
collection = db.get_collection("locations")

# POST a "/" → luego, con el prefix en main.py, será "/locations/"
@router.post("/", status_code=201, summary="Create Location")
async def create_location(loc: LocationCreate):
    data = loc.dict()
    result = await collection.insert_one(data)
    new_doc = await collection.find_one({"_id": result.inserted_id})
    if not new_doc:
        raise HTTPException(500, "Error creating location")
    new_doc["_id"] = str(new_doc["_id"])
    return new_doc
