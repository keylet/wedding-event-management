import React, { useState } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

export default function CreateUser({ onCreated }) {
  const [username, setUsername] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [role,     setRole]     = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${API}/register`, { username, email, password, role });
      setUsername(''); setEmail(''); setPassword(''); setRole('');
      onCreated();
    } catch (err) {
      console.error(err);
      alert('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
      <input placeholder="Email"    value={email}    onChange={e=>setEmail(e.target.value)}    required />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <input placeholder="Role"     value={role}     onChange={e=>setRole(e.target.value)}           required />
      <button type="submit">Create</button>
    </form>
  );
}
