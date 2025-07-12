# Wedding Booking - Photography Service

## Description

The **Photography Service** module is part of the Wedding Booking system. It provides functionality to manage photography services for events, including creating, updating, and deleting photography packages, assigning photographers, and integrating with external providers.



---

## Features

- **Create Photography Service**: Add new photography services with custom packages and pricing.
- **Update Photography Service**: Modify existing photography services.
- **Delete Photography Service**: Remove photography services from the system.
- **Photographer Management**: Assign and manage photographers for photography services.
- **Provider Integration**: Integrate with external photography providers.
- **API Endpoints**: RESTful API for seamless integration with other modules.

---

## Installation

Follow these steps to set up the Photography Service module locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/PammeC/WeddingBooking.git

2. Navigate to the photography-service branch:
    ```bash
    git checkout qa/photography-service
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Configure environment variables:

- Create a .env file in the project root.

- Add the following variables:
    ```bash
    PORT=3000
    DB_URI=mongodb://localhost:27017/weddingbooking
    JWT_SECRET=your_secret_key
    ```
5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints
### Photography Services
### Create a Photography Service
- Method: POST

- Route: /api/photography

- Body:

    ```bash
    {
    "name": "Premium Photography",
    "package": ["8 Hours Coverage", "200 Edited Photos", "1 Photographer"],
    "price": 10000,
    "provider": "Provider XYZ"
    }
    ```

### Get All Photography Services
- Method: GET

- Route: /api/photography

### Update a Photography Service
- Method: PUT

- Route: /api/photography/:id

- Body:
    ```bash
    {
    "price": 9500
    }
    ```

## Delete a Photography Service
- Method: DELETE

- Route: /api/photography/:id