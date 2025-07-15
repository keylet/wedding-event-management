import React, { useState, useEffect } from 'react';
import {
  getLocations,
  createLocation,
  deleteLocation
} from '../api';

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [form, setForm] = useState({
    name: '',
    provinceCode: '',
    type: '',
    population: '',
    lat: '',
    lng: ''
  });

  // Carga inicial
  const load = async () => {
    const { data } = await getLocations();
    setLocations(data);
  };

  useEffect(() => {
    load();
  }, []);

  // Al pulsar + Añadir
  const onAdd = async () => {
    const payload = {
      name: form.name,
      provinceCode: form.provinceCode,
      type: form.type,
      population: Number(form.population),
      coords: {
        lat: parseFloat(form.lat),
        lng: parseFloat(form.lng)
      }
    };
    console.log("Payload enviado:", payload);
    try {
      const resp = await createLocation(payload);
      console.log("CREATED:", resp.status, resp.data);
      setForm({
        name: '',
        provinceCode: '',
        type: '',
        population: '',
        lat: '',
        lng: ''
      });
      await load();
    } catch (err) {
      console.error("Error al crear:", err.response?.status, err.response?.data);
    }
  };

  return (
    <div>
      <h2>Localidades</h2>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Nombre"
        />
        <input
          value={form.provinceCode}
          onChange={e => setForm(f => ({ ...f, provinceCode: e.target.value }))}
          placeholder="Código Provincia"
        />
        <input
          value={form.type}
          onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
          placeholder="Tipo"
        />
        <input
          value={form.population}
          onChange={e => setForm(f => ({ ...f, population: e.target.value }))}
          placeholder="Población"
        />
        <input
          value={form.lat}
          onChange={e => setForm(f => ({ ...f, lat: e.target.value }))}
          placeholder="Latitud"
        />
        <input
          value={form.lng}
          onChange={e => setForm(f => ({ ...f, lng: e.target.value }))}
          placeholder="Longitud"
        />
        <button onClick={onAdd}>+ Añadir</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Provincia</th>
            <th>Tipo</th>
            <th>Pob.</th>
            <th>Acc.</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(loc => (
            <tr key={loc._id}>
              <td>{loc.name}</td>
              <td>{loc.provinceCode}</td>
              <td>{loc.type}</td>
              <td>{loc.population}</td>
              <td>
                <button
                  onClick={async () => {
                    await deleteLocation(loc._id);
                    load();
                  }}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
