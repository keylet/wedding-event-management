// src/components/DeleteUser.js
import React, { useState } from 'react';
import axios from 'axios';

function DeleteUser() {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llamada al microservicio delete-user-service
    axios.delete(`http://98.80.87.138:3005/users/${userId}`)

      .then(response => {
        alert('User deleted successfully!');
        setUserId('');
      })
      .catch(error => console.error('Error deleting user: ', error));
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteUser;
