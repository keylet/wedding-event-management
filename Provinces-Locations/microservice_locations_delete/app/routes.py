from fastapi import APIRouter, HTTPException
from .db import db
from bson import ObjectId

router = APIRouter()
collection = db.get_collection("locations")

# DELETE en "/" + "{id}" → con prefix="/locations" será "/locations/{id}"
@router.delete("/{id}", status_code=204, summary="Delete Location")
async def delete_location(id: str):
    res = await collection.delete_one({"_id": ObjectId(id)})
    if res.deleted_count == 0:
        raise HTTPException(404, "No encontrado")
    return
