# 💍 Wedding Event Management Platform

A modular, microservices-based platform designed to manage and book wedding-related services. The system allows users to browse and reserve catering, music, decoration, photography, and more, all built using independent services and containerized infrastructure.

---

## 🌐 Overview

The project is structured around microservices, allowing each domain (e.g., users, locations, catering) to be deployed and scaled independently. Services are developed in both Python and Java, following best practices in clean code and DevOps.

Currently, two core services are live:

- 📍 Provinces-Locations Microservice: http://52.7.131.155:8080/
- 👥 Users Microservice: http://98.80.87.138/

---

## 🛠️ Technology Stack

### Backend
- \`FastAPI\` (Python) – Used for **Users** and **Provinces-Locations**  
- \`Spring Boot\` (Java) – Used for **Catering**, **Music**, **Decoration**, and **Photography**  
- \`GraphQL\` – Used in Java microservices for flexible querying  
- \`REST\` – Used in Python microservices  

### Frontend
- \`React\` + \`Vite\` – Web UI for interacting with the system  
- \`ShadCN/UI\` – (optional) Component library for UI styling  

### Databases
- \`PostgreSQL\` – For Users, Decoration, and Photography services  
- \`MySQL\` – For Catering and Music services  
- \`MongoDB\` – For geolocation (Provinces-Locations)  

### DevOps & Infrastructure
- \`Docker & Docker Compose\` – Containerization  
- \`GitHub Actions\` – CI/CD pipelines  
- \`DockerHub\` – Image repository  
- \`AWS EC2\` – Live deployment  
- \`RDS (MySQL & PostgreSQL)\` – Database management  

---

## 📁 Project Structure

\`\`\`plaintext
📁 wedding-event-management/
├── .github/workflows/           # GitHub Actions (CI/CD)
├── Provinces-Locations/         # Geolocation service (FastAPI + MongoDB)
├── Users/                       # User management service (FastAPI + PostgreSQL)
├── catering-service/            # Catering (Spring Boot + MySQL)
├── music-service/               # Music (Spring Boot + MySQL)
├── decoration-service/
│   ├── create-decoration/
│   ├── read-decoration/
│   ├── update-decoration/
│   └── delete-decoration/
├── photography-service/
│   ├── create-photography/
│   ├── read-photography/
│   ├── update-photography/
│   └── delete-photography/
├── node_modules/                # Frontend dependencies
├── package.json                 # Frontend config
└── README.md                    # Project documentation
\`\`\`

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/wedding-event-management.git
cd wedding-event-management
\`\`\`

### 2️⃣ Set Environment Variables

Create a \`.env\` file with:

\`\`\`env
DATABASE_URL=mysql://user:password@host:3306/dbname
POSTGRES_URL=postgres://user:password@host:5432/dbname
MONGO_URI=mongodb://user:password@host:27017/dbname
JWT_SECRET=your_jwt_key
\`\`\`

### 3️⃣ Run Locally with Docker Compose

\`\`\`bash
docker-compose up -d
\`\`\`

---

## 📡 Deployment

Services are deployed using AWS EC2, DockerHub, and GitHub Actions. Example:

\`\`\`bash
# Build & push
docker build -t wedding-service .
docker tag wedding-service <AWS_ECR_REPO>
docker push <AWS_ECR_REPO>

# On EC2
docker pull <AWS_ECR_REPO>
docker run -d -p 80:80 wedding-service
\`\`\`

---

## 🔌 API Endpoints (Examples)

### 📍 Provinces-Locations (Live)
- Base URL: http://52.7.131.155:8080/
- CRUD for provinces and locations

### 👥 Users (Live)
- Base URL: http://98.80.87.138/
- POST \`/users/register\` – Register a new user  
- POST \`/users/login\` – Authenticate and receive JWT  

### 🍽️ Catering (Planned)
- POST \`/cateringC/create\`  
- PUT \`/cateringU/update/{id}\`  
- DELETE \`/cateringD/delete/{id}\`  

### 🎶 Music (Planned)
- POST \`/musicC/create\`  
- PUT \`/musicU/update/{id}\`  
- DELETE \`/musicD/delete/{id}\`  

### 🎨 Decoration (Planned)
The Decoration domain is split into four independent services:  
- \`create-decoration\`: Handles new decoration entries  
- \`read-decoration\`: Exposes GraphQL for listing/searching  
- \`update-decoration\`: Updates existing records  
- \`delete-decoration\`: Deletes decoration entries  

### 📸 Photography (Planned)
The Photography domain follows the same separation model:  
- \`create-photography\`  
- \`read-photography\`  
- \`update-photography\`  
- \`delete-photography\`  

Built with Spring Boot and PostgreSQL, each service is modular and can scale separately.

---

## 📈 Future Improvements

- Central API Gateway (e.g. NGINX, Traefik)  
- Service-level logging and monitoring  
- Notification services (email/SMS)  
- Admin panel for vendor management  

---

## 👤 Author

Developed and maintained by [Your Name].
EOF