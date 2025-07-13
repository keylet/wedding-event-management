// src/App.jsx
import React from 'react';
import GetUsers from './components/GetUsers';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Wedding Event Management</h1>
      <GetUsers />
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
      <Login />
    </div>
  );
}

export default App;
