Here is the `README.md` file for the **Delete Music Service** microservice:

---

### 📜 **README.md**
```markdown
# 🗑️ Delete Music Service - WeddingBooking

This microservice is responsible for handling the deletion of music services in the **WeddingBooking** system.

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
delete-music/
│── src/
│   ├── main/
│   │   ├── java/com/weddingBooking/music_service/
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── MusicController.java
│   │   │   ├── model/
│   │   │   │   ├── Music.java
│   │   │   ├── repository/
│   │   │   │   ├── MusicRepository.java
│   │   │   ├── service/
│   │   │   │   ├── MusicService.java
│   │   │   ├── MusicServiceApplication.java
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
cd WeddingBooking/delete-music
```

### 📌 2. Configure Database

Modify `application.properties` to match your database credentials:

```properties
spring.datasource.url=jdbc:mysql://your-db-host:3306/musicDB
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
docker build -t delete-music-service .
docker run -p 8064:8064 delete-music-service
```

---

## 📡 API Endpoints

### **📌 Available Routes**

#### ❌ Delete a music service:

**Request:**
```http
DELETE /musicD/delete/{id_music}
```

**Response:**
```json
{
  "message": "Music service deleted successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8064/swagger-ui.html
```

---
