import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from .routes import router

load_dotenv()
app = FastAPI(title="microservice_locations_create")

# QUITA o comenta esta línea para que FastAPI redirija automáticamente
# app.router.redirect_slashes = False

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Con este prefix: "/" → "/locations/"
app.include_router(router, prefix="/locations", tags=["locations"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=int(os.getenv("PORT", 4001)),
        reload=True,
    )


