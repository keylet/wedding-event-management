# Wedding Event Management

This project is a microservices application for managing wedding events.

## Microservices
- **create-user**: Create a new user.
- **delete-user**: Delete an existing user.
- **update-user**: Update a user.
- **login-logout**: Log in and log out.
- **user-profile**: View user profiles.

## Technologies
- **Node.js** for microservices.
- **PostgreSQL** for the database.
- **Docker** for containerization.
- **GitHub Actions** for CI/CD.

## Steps to Run
1. Clone the repository.
2. Run `docker-compose up --build` to start the services.
3. Access the services at `http://localhost:3001/create-user`, `http://localhost:3002/delete-user`.