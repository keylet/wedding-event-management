Here is the `README.md` file for the **Read Photography Service** microservice:

---

### 📜 **README.md**
```markdown
# 📖 Read Photography Service - WeddingBooking

This microservice is responsible for retrieving photography services in the **WeddingBooking** system using **GraphQL**.

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
read-photography/
│── src/
│   ├── main/
│   │   ├── java/com/weddingBooking/photography_service/
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── PhotographyController.java
│   │   │   │   ├── GraphQLSwaggerController.java
│   │   │   ├── model/
│   │   │   │   ├── Photography.java
│   │   │   ├── repository/
│   │   │   │   ├── PhotographyRepository.java
│   │   │   ├── service/
│   │   │   │   ├── PhotographyService.java
│   │   │   ├── PhotographyServiceApplication.java
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
cd WeddingBooking/read-photography
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
docker build -t read-photography-service .
docker run -p 8052:8052 read-photography-service
```

---

## 📡 API Endpoints

### **📌 Available GraphQL Queries**

#### 📝 Get all photography services:

**GraphQL Query:**
```graphql
query {
  getAllPhotography {
    id_photography
    name
    price
  }
}
```

---

#### 🔍 Get photography service by ID:

**GraphQL Query:**
```graphql
query {
  getPhotographyById(id_photography: 1) {
    id_photography
    name
    price
  }
}
```

---

#### 🔎 Search photography services by name:

**GraphQL Query:**
```graphql
query {
  searchPhotographyByName(name: "Premium Buffet") {
    id_photography
    name
    price
  }
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8052/swagger-ui.html
```

---
