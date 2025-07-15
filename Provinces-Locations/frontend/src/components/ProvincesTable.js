import React, { useEffect, useState } from 'react';
import { getProvinces, deleteProvince } from '../api';

export default function ProvincesTable() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProvinces().then(r => setList(r.data));
  }, []);

  const onDelete = id => {
    deleteProvince(id).then(() => {
      setList(l => l.filter(p => p._id !== id));
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Código</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {list.map(p => (
          <tr key={p._id}>
            <td>{p.name}</td>
            <td>{p.provinceCode}</td>
            <td>
              <button onClick={() => onDelete(p._id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
