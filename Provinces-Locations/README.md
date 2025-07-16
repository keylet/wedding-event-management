# 📍 Provinces & Locations Microservice

A geographic data service for the Wedding Event Management platform. Manages provinces and their nested locations with full CRUD functionality.

---

## 🌐 Overview

This microservice provides endpoints to create, list, update, and delete province-location records. All data is stored in MongoDB and served via FastAPI.

Live URL: http://52.7.131.155:8080/

---

## 🛠️ Technology Stack

- **Framework:** FastAPI (Python)  
- **Server:** Uvicorn  
- **Database:** MongoDB (Motor async driver)  
- **Containerization:** Docker & Docker Compose  
- **CI/CD:** GitHub Actions  

---

## 📁 Project Structure

```plaintext
Provinces-Locations/
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   └── routers/
│       └── locations.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md

🚀 Getting Started
bash
Copiar
Editar
git clone https://github.com/your-username/Provinces-Locations.git
cd Provinces-Locations

# Create and edit .env file:
# MONGO_URI=mongodb://user:password@host:27017/locations_db

pip install -r requirements.txt

# Run locally with live reload
uvicorn app.main:app --host 0.0.0.0 --port 8080 --reload

# Or using Docker Compose
docker-compose up -d

🔌 API Endpoints
Method	Path	Description
POST	/locations/create	Create a new location
GET	/locations/list	Retrieve all locations
PUT	/locations/update/{id}	Update a specific location
DELETE	/locations/delete/{id}	Delete a specific location

📈 Future Improvements
Search and filter query parameters

Enhanced data validation with Pydantic rules

Caching layer for high-traffic endpoints

