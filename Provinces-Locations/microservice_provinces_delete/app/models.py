from pydantic import BaseModel, Field
from typing import Optional

class Province(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str
    code: str
