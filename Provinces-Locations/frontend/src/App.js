import React, { useState } from 'react';
import './App.css';
import ProvincesTable from './components/ProvincesTable';
import LocationsTable from './components/LocationsTable';

function App() {
  const [tab, setTab] = useState('provinces');

  return (
    <div className="App">
      <h1>Provincias & Localidades</h1>
      <div className="tab-buttons">
        <button
          className={tab === 'provinces' ? 'active' : 'inactive'}
          onClick={() => setTab('provinces')}
        >
          Provincias
        </button>
        <button
          className={tab === 'locations' ? 'active' : 'inactive'}
          onClick={() => setTab('locations')}
        >
          Localidades
        </button>
      </div>
      <div>
        {tab === 'provinces' ? <ProvincesTable /> : <LocationsTable />}
      </div>
    </div>
  );
}

export default App;
