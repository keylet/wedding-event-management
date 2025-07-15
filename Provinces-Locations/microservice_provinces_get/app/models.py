from pydantic import BaseModel, Field

class Province(BaseModel):
    id: str = Field(..., alias="_id")
    name: str

    class Config:
        allow_population_by_field_name = True
