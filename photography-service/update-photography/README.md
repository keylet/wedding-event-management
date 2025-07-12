Here is the `README.md` file for the **Update Photography Service** microservice:

---

### 📜 **README.md**
```markdown
# 🔄 Update Photography Service - WeddingBooking

This microservice is responsible for updating existing photography services in the **WeddingBooking** system.

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
update-photography/
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
cd WeddingBooking/update-photography
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
docker build -t update-photography-service .
docker run -p 8053:8053 update-photography-service
```

---

## 📡 API Endpoints

### **📌 Update an existing photography service**
**Endpoint:** `PUT /photographyU/update/{id_photography}`

#### 🔄 Request:
```json
{
  "name": "Updated Photography Name",
  "price": 2500.00
}
```

#### ✅ Response:
```json
{
  "message": "Edit photography service successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8053/swagger-ui.html
```

---

## 📝 License

This project is licensed under the **MIT** license.

📌 **Author:** [PammeC](https://github.com/PammeC)
```
