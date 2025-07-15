from pydantic import BaseModel, Field
from typing import Optional

class Location(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str
    province_id: str
