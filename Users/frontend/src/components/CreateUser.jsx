// src/components/CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };
    
    // Llamada al microservicio user-registration-service
    axios.post('http://<EC2_PUBLIC_IP>:3005/users', newUser) // Cambia la IP pública de tu EC2
      .then(response => {
        alert('User created successfully!');
        setName('');
        setEmail('');
      })
      .catch(error => console.error('Error creating user: ', error));
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
