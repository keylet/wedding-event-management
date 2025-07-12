Here is the `README.md` file for the **Update Decoration Service** microservice:

---

### 📜 **README.md**
```markdown
# 🔄 Update Decoration Service - WeddingBooking

This microservice is responsible for updating existing decoration services in the **WeddingBooking** system.

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
update-decoration/
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
cd WeddingBooking/update-decoration
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
docker build -t update-decoration-service .
docker run -p 8043:8043 update-decoration-service
```

---

## 📡 API Endpoints

### **📌 Update an existing decoration service**
**Endpoint:** `PUT /decorationU/update/{id_decoration}`

#### 🔄 Request:
```json
{
  "name": "Updated Decoration Name",
  "price": 2500.00
}
```

#### ✅ Response:
```json
{
  "message": "Edit decoration service successfully"
}
```

---

## 📜 API Documentation (Swagger)

Once the application is running, access the Swagger UI at:

```
http://localhost:8043/swagger-ui.html
```

---

## 📝 License

This project is licensed under the **MIT** license.

📌 **Author:** [PammeC](https://github.com/PammeC)
```
