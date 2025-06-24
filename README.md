# Wedding Event Management

Este proyecto es una aplicación de microservicios para gestionar eventos de bodas.

## Microservicios
- **create-user**: Crear un nuevo usuario.
- **delete-user**: Eliminar un usuario existente.
- **update-user**: Actualizar un usuario.
- **login-logout**: Iniciar y cerrar sesión.
- **user-profile**: Ver los perfiles de los usuarios.

## Tecnologías
- **Node.js** para los microservicios.
- **PostgreSQL** para la base de datos.
- **Docker** para contenerización.
- **GitHub Actions** para CI/CD.


1. Clona el repositorio.
2. Ejecuta `docker-compose up --build` para iniciar los servicios.
3. Accede a los servicios en `http://localhost:3001/create-user`, `http://localhost:3002/delete-user`.
