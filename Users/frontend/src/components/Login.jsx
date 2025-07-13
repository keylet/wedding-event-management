import React, { useState } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${API}/login`, { email, password });
      alert('Login successful!');
      setEmail(''); setPassword('');
    } catch (err) {
      console.error(err);
      alert('Error logging in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email"    placeholder="Email"    value={email}    onChange={e=>setEmail(e.target.value)}    required />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}
