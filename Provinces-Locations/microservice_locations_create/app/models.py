from pydantic import BaseModel, Field
from typing import Dict, Optional

class LocationCreate(BaseModel):
    name: str
    provinceCode: str
    type: str
    population: int
    # coords ya no es obligatorio: si no llega, será {lat:0.0,lng:0.0}
    coords: Optional[Dict[str, float]] = Field(default_factory=lambda: {"lat": 0.0, "lng": 0.0})
