# 🍽️ Create Decoration Service - WeddingBooking

This microservice handles the creation of decoration services for the **WeddingBooking** system.

## 🚀 Technologies Used

- **Spring Boot** (Backend framework)
- **Spring Data JPA** (Database management)
- **Springdoc OpenAPI** (API Documentation - Swagger)
- **MySQL/PostgreSQL** (Database)
- **Docker** (Containerization)
- **CORS Configuration** (Security)

---

## 📂 Project Structure

decoration-service/ │── src/ │ ├── main/ │ │ ├── java/com/weddingbooking/decoration/ │ │ │ ├── entity/ │ │ │ │ ├── Decoration.java │ │ │ ├── repository/ │ │ │ │ ├── DecorationRepository.java │ │ │ ├── service/ │ │ │ │ ├── DecorationService.java │ │ │ ├── controller/ │ │ │ │ ├── DecorationController.java │ │ │ ├── config/ │ │ │ │ ├── CorsConfig.java │ │ │ │ ├── SwaggerConfig.java │── .gitignore │── Dockerfile │── pom.xml │── README.md

---

## 🔧 Setup and Usage

### 📌 1. Clone Repository

```bash
git clone https://github.com/PammeC/WeddingBooking.git
cd WeddingBooking/decoration-service
```

### 📌 2. Configure Database
Modify application.properties to match your database credentials:
```bash
spring.datasource.url=jdbc:mysql://your-db-host:3306/decorationDB
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
docker build -t decoration-service .
docker run -p 8041:8041 decoration-service
```

## 📡 API Endpoints

### 📌 Available Routes
✅ Create a new decoration service:
Request:
```bash
POST /decorationC/create
```

Body:
```bash
{
  "name": "Gourmet Decoration",
  "price": 5000
}
```
Response:
```bash
{
  "message": "Decoration service created successfully"
}
```
🔗 CORS Configuration
To allow requests from external sources, the CORS configuration in CorsConfig.java allows all origins, headers, and methods.

📜 API Documentation (Swagger)
Once the application is running, access the Swagger UI at:


http://localhost:8041/swagger-ui.html
🛠 Maintenance and Updates
To update dependencies:

```bash
mvn clean install
To check for errors:
```

```bash

mvn verify
```