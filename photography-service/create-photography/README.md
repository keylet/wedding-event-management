# 🍽️ Create Photography Service - WeddingBooking

This microservice handles the creation of photography services for the **WeddingBooking** system.

## 🚀 Technologies Used

- **Spring Boot** (Backend framework)
- **Spring Data JPA** (Database management)
- **Springdoc OpenAPI** (API Documentation - Swagger)
- **MySQL/PostgreSQL** (Database)
- **Docker** (Containerization)
- **CORS Configuration** (Security)

---

## 📂 Project Structure

photography-service/ │── src/ │ ├── main/ │ │ ├── java/com/weddingbooking/photography/ │ │ │ ├── entity/ │ │ │ │ ├── Photography.java │ │ │ ├── repository/ │ │ │ │ ├── PhotographyRepository.java │ │ │ ├── service/ │ │ │ │ ├── PhotographyService.java │ │ │ ├── controller/ │ │ │ │ ├── PhotographyController.java │ │ │ ├── config/ │ │ │ │ ├── CorsConfig.java │ │ │ │ ├── SwaggerConfig.java │── .gitignore │── Dockerfile │── pom.xml │── README.md

---

## 🔧 Setup and Usage

### 📌 1. Clone Repository

```bash
git clone https://github.com/PammeC/WeddingBooking.git
cd WeddingBooking/photography-service
```

### 📌 2. Configure Database
Modify application.properties to match your database credentials:
```bash
spring.datasource.url=jdbc:mysql://your-db-host:3306/photographyDB
spring.datasource.username=your-username
spring.datasource.password=your-password
```
### 📌 3. Build and Run
```bash
Run Locally:
mvn spring-boot:run
Run with Docker:
```
```bash
docker build -t photography-service .
docker run -p 8051:8051 photography-service
```

## 📡 API Endpoints

### 📌 Available Routes
✅ Create a new photography service:
Request:
```bash
POST /photographyC/create
```

Body:
```bash
{
  "name": "Gourmet Photography",
  "price": 5000
}
```
Response:
```bash
{
  "message": "Photography service created successfully"
}
```
🔗 CORS Configuration
To allow requests from external sources, the CORS configuration in CorsConfig.java allows all origins, headers, and methods.

📜 API Documentation (Swagger)
Once the application is running, access the Swagger UI at:


http://localhost:8051/swagger-ui.html
🛠 Maintenance and Updates
To update dependencies:

```bash
mvn clean install
To check for errors:
```

```bash

mvn verify
```