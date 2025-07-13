# WeddingBooking

# 🚀 Wedding Booking System
A **microservices-based** event booking platform for **weddings**, deployed on **AWS**, using **RDS MySQL & PostgreSQL**, and **Dockerized services**.

## 📌 **Project Overview**
The **Wedding Booking System** is a fully functional **event reservation platform** that allows users to book **catering, music, decoration, and photography** services for weddings.

This project follows a **microservices architecture**, running **27 independent services**, all containerized with **Docker** and orchestrated in **AWS**.
---
## Architecture Diagram 🏗️

![Architecture Diagram](image.png "Architecture Diagram")

---

## ⚙️ **Technology Stack**
- **Backend**
  - `Spring Boot` (Java) - Microservices framework.
  - `GraphQL` - API query language.
  - `Eureka` - Service discovery.
  - `Feign Client` - Internal service communication.

- **Frontend**
  - `Next.js` + `TypeScript` - Modern web UI.
  - `ShadCN/UI` - Component library.

- **Databases**
  - `AWS RDS MySQL` - Reservation and user management.
  - `AWS RDS PostgreSQL` - Service providers' database.

- **Infrastructure**
  - `AWS EC2` - Compute instances for hosting.
  - `AWS Load Balancer` - Traffic distribution.
  - `Docker & Docker Compose` - Container management.
  - `GitHub Actions` - CI/CD automation.

---

## 🏗 **Project Structure**
📂 wedding-booking-system ├── 📂 .github/workflows # CI/CD with GitHub Actions ├── 📂 Provinces-Locations # Microservice for location management ├── 📂 Users # User authentication microservice ├── 📂 catering-service # Catering microservice ├── 📂 decoration-service # Decoration microservice ├── 📂 music-service # Music microservice ├── 📂 photography-service # Photography microservice ├── 📂 eureka-serv # Eureka service registry ├── 📜 .gitignore # Git ignored files ├── 📜 README.md # Project documentation

yaml
Copiar
Editar
📌 **This project contains `27` microservices**, each running in an independent Docker container.

---

## 🚀 **Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/wedding-booking-system.git
cd wedding-booking-system
2️⃣ Configure Environment Variables
Create a .env file in the project root with the following:

ini
Copiar
Editar
DATABASE_URL=mysql://user:password@host:3306/dbname
POSTGRES_URL=postgres://user:password@host:5432/dbname
AWS_REGION=us-east-1
JWT_SECRET=your_secret_key
3️⃣ Run Microservices with Docker
bash
Copiar
Editar
docker-compose up -d
📌 This will start all microservices along with MySQL and PostgreSQL databases.

☁ Deploying on AWS
This project is AWS-ready, using:

EC2 for running application instances.
RDS for database management.
ECS / Fargate for container orchestration.
Elastic Load Balancer (ELB) for traffic distribution.
1️⃣ Deploy on AWS using Docker
bash
Copiar
Editar
docker build -t wedding-booking .
docker tag wedding-booking:latest <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/wedding-booking
docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/wedding-booking
Then, on the EC2 instance, run:

bash
Copiar
Editar
docker pull <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/wedding-booking
docker run -d -p 80:80 wedding-booking
🔌 Microservices API Endpoints
📌 Catering
Create Service: POST http://44.208.178.247:8071/cateringC/create
List Services: POST http://44.208.178.247:8072/graphql
Update Service: PUT http://44.208.178.247:8073/cateringU/update/{id}
Delete Service: DELETE http://44.208.178.247:8074/cateringD/delete/{id}
📌 Music
Create Service: POST http://54.173.57.181:8061/musicC/create
List Services: POST http://54.173.57.181:8062/graphql
Update Service: PUT http://54.173.57.181:8063/musicU/update/{id}
Delete Service: DELETE http://184.72.70.45:8064/musicD/delete/{id}
📌 Decoration
Create Service: POST http://44.212.202.69:8041/decorationC/create
List Services: POST http://44.212.202.69:8042/graphql
Update Service: PUT http://44.212.202.69:8043/decorationU/update/{id}
Delete Service: DELETE http://44.212.202.69:8044/decorationD/delete/{id}
📌 Photography
Create Service: POST http://3.229.141.153:8051/photographyC/create
List Services: POST http://3.229.141.153:8052/graphql
Update Service: PUT http://3.229.141.153:8053/photographyU/update/{id}
Delete Service: DELETE http://3.229.141.153:8054/photographyD/delete/{id}
```


