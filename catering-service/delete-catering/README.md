Here is the `README.md` file for the **Delete Catering Service** microservice:

---

### 📜 **README.md**
```markdown
# 🗑️ Delete Catering Service - WeddingBooking

This microservice is responsible for handling the deletion of catering services in the **WeddingBooking** system.

---

## 🚀 Technologies Used

- **Spring Boot** - Backend framework
- **Spring Data JPA** - Database management
- **Springdoc OpenAPI** - API Documentation (Swagger)
- **MySQL/PostgreSQL** - Database
- **Docker** - Containerization
- **CORS Configuration** - Security setup

---

## 📂 Project Structure

```
delete-catering/
│── src/
│   ├── main/
│   │   ├── java/com/weddingBooking/catering_service/
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── CateringController.java
│   │   │   ├── model/
│   │   │   │   ├── Catering.java
│   │   │   ├── repository/
│   │   │   │   ├── CateringRepository.java
│   │   │   ├── service/
│   │   │   │   ├── CateringService.java
│   │   │   ├── CateringServiceApplication.java
│── .gitignore
│── Dockerfile
│── pom.xml
│── README.md
```

---

## 🔧 Setup and Usage

### 📌 1. Clone Repository

```bash
git clone https://github.com/PammeC/WeddingBooking.git
cd WeddingBooking/delete-catering
```

### 📌 2. Configure Database

Modify `application.properties` to match your database credentials:

```properties
spring.datasource.url=jdbc:mysql://your-db-host:3306/cateringDB
spring.datasource.username=your-username
spring.datasource.password=your-password
```

### 📌 3. Build and Run

#### Run Locally:
```bash
mvn spring-boot:run
```

#### Run with Docker:
```bash
docker build -t delete-catering-service .
docker run -p 8074:8074 delete-catering-service
```

---

## 📡 API Endpoints

### **📌 Available Routes**

#### ❌ Delete a catering service:

**Request:**
```http
DELETE /cateringD/delete/{id_catering}
```

**Response:**
```json
{
  "message": "Catering service deleted successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8074/swagger-ui.html
```

---
