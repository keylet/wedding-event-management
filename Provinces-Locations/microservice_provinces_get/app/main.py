from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import router
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="microservice_provinces_get")

# Evita el redirect 307 de “/provinces” a “/provinces/”
app.router.redirect_slashes = False

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=4004, reload=True)
