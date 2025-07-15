from fastapi import APIRouter, HTTPException
from .db import db
from bson import ObjectId

router = APIRouter()
collection = db.get_collection("provinces")

# DELETE en "/" + "{id}" → con prefix="/provinces" será "/provinces/{id}"
@router.delete("/{id}", status_code=204, summary="Delete Province")
async def delete_province(id: str):
    res = await collection.delete_one({"_id": ObjectId(id)})
    if res.deleted_count == 0:
        raise HTTPException(404, "No encontrado")
    return
