Here is the `README.md` file for the **Delete Photography Service** microservice:

---

### 📜 **README.md**
```markdown
# 🗑️ Delete Photography Service - WeddingBooking

This microservice is responsible for handling the deletion of photography services in the **WeddingBooking** system.

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
delete-photography/
│── src/
│   ├── main/
│   │   ├── java/com/weddingBooking/photography_service/
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── PhotographyController.java
│   │   │   ├── model/
│   │   │   │   ├── Photography.java
│   │   │   ├── repository/
│   │   │   │   ├── PhotographyRepository.java
│   │   │   ├── service/
│   │   │   │   ├── PhotographyService.java
│   │   │   ├── PhotographyServiceApplication.java
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
cd WeddingBooking/delete-photography
```

### 📌 2. Configure Database

Modify `application.properties` to match your database credentials:

```properties
spring.datasource.url=jdbc:mysql://your-db-host:3306/photographyDB
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
docker build -t delete-photography-service .
docker run -p 8054:8054 delete-photography-service
```

---

## 📡 API Endpoints

### **📌 Available Routes**

#### ❌ Delete a photography service:

**Request:**
```http
DELETE /photographyD/delete/{id_photography}
```

**Response:**
```json
{
  "message": "Photography service deleted successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8054/swagger-ui.html
```

---
