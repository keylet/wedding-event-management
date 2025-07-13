// src/components/GetUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Llamada al microservicio get-user-service
    axios.get('http://98.80.87.138:3001/api/users')

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
