# 👥 Users Microservice

A focused authentication service within the Wedding Event Management platform. Handles user registration, login, and JWT-based access control.

---

## 🌐 Overview

This microservice manages all user-related operations. It exposes endpoints for registering new users, authenticating existing users, and issuing JSON Web Tokens for secured access to other services.

Live URL: http://98.80.87.138/

---

## 🛠️ Technology Stack

- **Framework:** FastAPI (Python)  
- **Server:** Uvicorn  
- **Database:** PostgreSQL  
- **Containerization:** Docker & Docker Compose  
- **CI/CD:** GitHub Actions  
- **Secrets:** `.env` file with `DATABASE_URL` and `JWT_SECRET`  

---

## 📁 Project Structure

```plaintext
Users/
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   └── routers/
│       ├── auth.py
│       └── users.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md



🚀 Getting Started
bash
Copiar
Editar
git clone https://github.com/your-username/Users.git
cd Users

# Create and edit .env file:
# DATABASE_URL=postgresql://user:password@host:5432/users_db
# JWT_SECRET=your_jwt_secret_key

pip install -r requirements.txt

# Run locally with live reload
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# Or using Docker Compose
docker-compose up -d

🔌 API Endpoints
Method	Path	Description
POST	/users/register	Register a new user
POST	/users/login	Authenticate and receive JWT
GET	/users/me	Get current user profile (requires JWT)
PUT	/users/update/{id}	Update a specific user’s data (JWT)
DELETE	/users/delete/{id}	Delete a specific user account (JWT)


📈 Future Improvements
Email verification workflow

Rate limiting on login endpoint

Role-based access control (RBAC)

