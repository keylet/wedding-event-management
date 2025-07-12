Here is the `README.md` file for the **Read Music Service** microservice:

---

### 📜 **README.md**
```markdown
# 📖 Read Music Service - WeddingBooking

This microservice is responsible for retrieving music services in the **WeddingBooking** system using **GraphQL**.

---

## 🚀 Technologies Used

- **Spring Boot** - Backend framework
- **Spring Data JPA** - Database management
- **GraphQL** - API Query Language
- **Springdoc OpenAPI** - API Documentation (Swagger)
- **MySQL/PostgreSQL** - Database
- **Docker** - Containerization
- **CORS Configuration** - Security setup

---

## 📂 Project Structure

```
read-music/
│── src/
│   ├── main/
│   │   ├── java/com/weddingBooking/music_service/
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── MusicController.java
│   │   │   │   ├── GraphQLSwaggerController.java
│   │   │   ├── model/
│   │   │   │   ├── Music.java
│   │   │   ├── repository/
│   │   │   │   ├── MusicRepository.java
│   │   │   ├── service/
│   │   │   │   ├── MusicService.java
│   │   │   ├── MusicServiceApplication.java
│   │   ├── resources/
│   │   │   ├── graphql/
│   │   │   │   ├── schema.graphqls
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
git clone https://github.com/PammeC/WeddingBooking.git
cd WeddingBooking/read-music
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
docker build -t read-music-service .
docker run -p 8062:8062 read-music-service
```

---

## 📡 API Endpoints

### **📌 Available GraphQL Queries**

#### 📝 Get all music services:

**GraphQL Query:**
```graphql
query {
  getAllMusic {
    id_music
    name
    price
  }
}
```

---

#### 🔍 Get music service by ID:

**GraphQL Query:**
```graphql
query {
  getMusicById(id_music: 1) {
    id_music
    name
    price
  }
}
```

---

#### 🔎 Search music services by name:

**GraphQL Query:**
```graphql
query {
  searchMusicByName(name: "Premium Buffet") {
    id_music
    name
    price
  }
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8062/swagger-ui.html
```

---
