import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from .routes import router

load_dotenv()
app = FastAPI(title="microservice_provinces_delete")

# Permite redirección automática de slash
# (comentario si lo habías desactivado)
# app.router.redirect_slashes = False

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sólo este prefijo: "/" → "/provinces/"
app.include_router(router, prefix="/provinces", tags=["provinces"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=int(os.getenv("PORT", 4005)),
        reload=True,
    )
