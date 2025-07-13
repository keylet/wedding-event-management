// src/components/UpdateUser.js
import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const [userId, setUserId] = useState('');
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = { name: newName };
    
    // Llamada al microservicio update-user-service
    axios.put(`http://98.80.87.138:3004/users/${userId}`, updatedUser)

      .then(response => {
        alert('User updated successfully!');
        setUserId('');
        setNewName('');
      })
      .catch(error => console.error('Error updating user: ', error));
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
