from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import router
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="microservice_locations_delete")

app.router.redirect_slashes = False

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=4003, reload=True)
