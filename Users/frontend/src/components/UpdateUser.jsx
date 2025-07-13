import React, { useState } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

export default function UpdateUser({ onUpdated }) {
  const [id,       setId]       = useState('');
  const [username, setUsername] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [role,     setRole]     = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`${API}/users/${encodeURIComponent(id)}`, { username, email, password, role });
      setId(''); setUsername(''); setEmail(''); setPassword(''); setRole('');
      onUpdated();
    } catch (err) {
      console.error(err);
      alert('Error updating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update User</h2>
      <input placeholder="ID"           value={id}       onChange={e=>setId(e.target.value)}       required />
      <input placeholder="Username"     value={username} onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Email"        value={email}    onChange={e=>setEmail(e.target.value)}    />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <input placeholder="Role"         value={role}     onChange={e=>setRole(e.target.value)}      />
      <button type="submit">Update</button>
    </form>
  );
}
