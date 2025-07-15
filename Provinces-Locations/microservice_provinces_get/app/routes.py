from fastapi import APIRouter
from typing import List
from .models import Province
from .db import db

router = APIRouter()
col = db.get_collection("provinces")

@router.get("/provinces/", response_model=List[Province])
async def get_provinces():
    docs = await col.find().to_list(100)
    return [Province(_id=str(d["_id"]), name=d.get("name")) for d in docs]
