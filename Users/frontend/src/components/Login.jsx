// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { email, password };
    
    // Llamada al microservicio login-service
    axios.post('http://<EC2_PUBLIC_IP>:3003/login', credentials) // Cambia la IP pública de tu EC2
      .then(response => {
        alert('Login successful!');
        setEmail('');
        setPassword('');
      })
      .catch(error => console.error('Error logging in: ', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
