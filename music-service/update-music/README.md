Here is the `README.md` file for the **Update Music Service** microservice:

---

### 📜 **README.md**
```markdown
# 🔄 Update Music Service - WeddingBooking

This microservice is responsible for updating existing music services in the **WeddingBooking** system.

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
update-music/
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
│   │   ├── resources/
│   │   │   ├── application.properties
│── .gitignore
│── Dockerfile
│── pom.xml
│── README.md
```

---

## 🔧 Setup and Usage

### 📌 1. Clone Repository

```bash
git clone https://github.com/Pammec/WeddingBooking.git
cd WeddingBooking/update-music
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
docker build -t update-music-service .
docker run -p 8063:8063 update-music-service
```

---

## 📡 API Endpoints

### **📌 Update an existing music service**
**Endpoint:** `PUT /musicU/update/{id_music}`

#### 🔄 Request:
```json
{
  "name": "Updated Music Name",
  "price": 2500.00
}
```

#### ✅ Response:
```json
{
  "message": "Edit music service successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8063/swagger-ui.html
```

---

## 📝 License

This project is licensed under the **MIT** license.

📌 **Author:** [PammeC](https://github.com/PammeC)
```
