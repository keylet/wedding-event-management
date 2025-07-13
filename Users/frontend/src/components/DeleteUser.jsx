import React, { useState } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

export default function DeleteUser({ onDeleted }) {
  const [id, setId] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!window.confirm(`Delete user #${id}?`)) return;
    try {
      await axios.delete(`${API}/users/${encodeURIComponent(id)}`);
      setId('');
      onDeleted();
    } catch (err) {
      console.error(err);
      alert('Error deleting user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete User</h2>
      <input placeholder="ID" value={id} onChange={e=>setId(e.target.value)} required />
      <button type="submit">Delete</button>
    </form>
  );
}
