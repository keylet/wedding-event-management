# Wedding Booking - Catering Service

## Description

The **Catering Service** module is part of the Wedding Booking system. It provides functionality to manage catering services for events, including creating, updating, and deleting catering options, assigning menus, and integrating with external providers.

---

## Features

- **Create Catering Service**: Add new catering services with custom menus and pricing.
- **Update Catering Service**: Modify existing catering services.
- **Delete Catering Service**: Remove catering services from the system.
- **Menu Management**: Assign and manage menus for catering services.
- **Provider Integration**: Integrate with external catering providers.
- **API Endpoints**: RESTful API for seamless integration with other modules.

---

## Installation

Follow these steps to set up the Catering Service module locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/PammeC/WeddingBooking.git

2. Navigate to the catering-service branch:
    ```bash
    git checkout qa/catering-service

3. Install dependencies:
    ```bash
    npm install

4. Configure environment variables:

- Create a .env file in the project root.

- Add the following variables:
    ```bash
    PORT=3000
    DB_URI=mongodb://localhost:27017/weddingbooking
    JWT_SECRET=your_secret_key

5. Start the server:
    ```bash
    npm start

## API Endpoints 
- Catering Services
### Create a Catering Service
    - Method: POST

    - Route: /api/catering

    - Body:

    ```bash
        {
    "name": "Premium Service",
    "menu": ["Starter", "Main Course", "Dessert"],
    "price": 5000,
    "provider": "Provider XYZ"
    }
    ```


### Get All Catering Services
- Method: GET

- Route: /api/catering

- Update a Catering Service
    Method: PUT

- Route: /api/catering/:id

- Body:    
    ```bash
    {
    "price": 4500
    }
    ```

### Delete a Catering Service
- Method: DELETE

- Route: /api/catering/:id

- Menu Management
Assign a Menu to a Catering Service
Method: POST

- Route: /api/catering/:id/menu

- Body:

    ```bash
        {
    "menu": ["New Starter", "New Main Course", "New Dessert"]
    }
    ```

### Update a Menu
- Method: PUT

- Route: /api/catering/:id/menu

- Body:

    ```bash
    {
    "menu": ["Updated Starter", "Updated Main Course", "Updated Dessert"]
    }
    ```

### Delete a Menu
- Method: DELETE

- Route: /api/catering/:id/menu