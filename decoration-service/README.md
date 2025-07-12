# Wedding Booking - Decoration Service

## Description

The **Decoration Service** module is part of the Wedding Booking system. It provides functionality to manage decoration services for events, including creating, updating, and deleting decoration options, assigning themes, and integrating with external providers.


---

## Features

- **Create Decoration Service**: Add new decoration services with custom themes and pricing.
- **Update Decoration Service**: Modify existing decoration services.
- **Delete Decoration Service**: Remove decoration services from the system.
- **Theme Management**: Assign and manage themes for decoration services.
- **Provider Integration**: Integrate with external decoration providers.
- **API Endpoints**: RESTful API for seamless integration with other modules.

---

## Installation

Follow these steps to set up the Decoration Service module locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/PammeC/WeddingBooking.git
   ```

2. Navigate to the decoration-service branch:
    ```bash
    git checkout qa/decoration-service
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
### Decoration Services
### Create a Decoration Service
- Method: POST

- Route: /api/decoration

- Body:
    ```bash
    {
    "name": "Premium Decoration",
    "theme": "Vintage",
    "price": 7000,
    "provider": "Provider ABC"
    }
    ```

### Get All Decoration Services
- Method: GET

- Route: /api/decoration

### Update a Decoration Service
- Method: PUT

- Route: /api/decoration/:id

- Body:
    ```bash
    {
    "price": 6500
    }
    ```
### Delete a Decoration Service
- Method: DELETE

- Route: /api/decoration/:id