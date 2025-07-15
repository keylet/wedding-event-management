from fastapi import APIRouter, HTTPException
from .db import db
from bson import ObjectId

router = APIRouter(prefix="/provinces", tags=["provinces"])

@router.delete("/{item_id}", status_code=204)
async def delete_item(item_id: str):
    res = await db.provinces.delete_one({"_id": ObjectId(item_id)})
    if res.deleted_count == 0:
        raise HTTPException(404, "Province not found")
