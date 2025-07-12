Here is the `README.md` file for the **Delete Decoration Service** microservice:

---

### 📜 **README.md**
```markdown
# 🗑️ Delete Decoration Service - WeddingBooking

This microservice is responsible for handling the deletion of decoration services in the **WeddingBooking** system.

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
delete-decoration/
│── src/
│   ├── main/
│   │   ├── java/com/weddingBooking/decoration_service/
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── DecorationController.java
│   │   │   ├── model/
│   │   │   │   ├── Decoration.java
│   │   │   ├── repository/
│   │   │   │   ├── DecorationRepository.java
│   │   │   ├── service/
│   │   │   │   ├── DecorationService.java
│   │   │   ├── DecorationServiceApplication.java
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
cd WeddingBooking/delete-decoration
```

### 📌 2. Configure Database

Modify `application.properties` to match your database credentials:

```properties
spring.datasource.url=jdbc:mysql://your-db-host:3306/decorationDB
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
docker build -t delete-decoration-service .
docker run -p 8044:8044 delete-decoration-service
```

---

## 📡 API Endpoints

### **📌 Available Routes**

#### ❌ Delete a decoration service:

**Request:**
```http
DELETE /decorationD/delete/{id_decoration}
```

**Response:**
```json
{
  "message": "Decoration service deleted successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8044/swagger-ui.html
```

---
