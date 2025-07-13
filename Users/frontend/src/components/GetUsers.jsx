// src/components/GetUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Llamada al microservicio get-user-service
    axios.get('http://<EC2_PUBLIC_IP>:3002/users') // Cambia la IP pública de tu EC2
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users: ', error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetUsers;
