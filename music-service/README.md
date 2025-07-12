# Wedding Booking - Music Service

## Description

The **Music Service** module is part of the Wedding Booking system. It provides functionality to manage music services for events, including creating, updating, and deleting music options, assigning playlists, and integrating with external providers.



---

## Features

- **Create Music Service**: Add new music services with custom playlists and pricing.
- **Update Music Service**: Modify existing music services.
- **Delete Music Service**: Remove music services from the system.
- **Playlist Management**: Assign and manage playlists for music services.
- **Provider Integration**: Integrate with external music providers.
- **API Endpoints**: RESTful API for seamless integration with other modules.

---

## Installation

Follow these steps to set up the Music Service module locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/PammeC/WeddingBooking.git

2. Navigate to the music-service branch:
    ```bash
    git checkout qa/music-service
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
### Music Services
### Create a Music Service
- Method: POST

- Route: /api/music
- Body:
    ```bash
    {
    "name": "Live Band",
    "playlist": ["Song 1", "Song 2", "Song 3"],
    "price": 8000,
    "provider": "Provider XYZ"
    }
    ```

### Get All Music Services
- Method: GET

- Route: /api/music

### Update a Music Service
- Method: PUT

- Route: /api/music/:id

- Body:
    ```bash
    {
    "price": 7500
    }
    ```

### Delete a Music Service
- Method: DELETE

- Route: /api/music/:id