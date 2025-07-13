import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

export default function GetUsers({ refresh }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${API}/users`)
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, [refresh]);

  return (
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Username</th><th>Email</th><th>Password</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
