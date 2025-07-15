from pydantic import BaseModel, Field
from typing import Dict, Optional

class Location(BaseModel):
    id: str = Field(..., alias="_id")
    name: str
    province_id: Optional[str] = None
    type: str
    population: int
    coords: Dict[str, float]

    class Config:
        allow_population_by_field_name = True
