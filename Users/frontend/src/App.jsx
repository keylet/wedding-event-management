import React, { useState } from 'react';
import GetUsers    from './components/GetUsers';
import CreateUser  from './components/CreateUser';
import UpdateUser  from './components/UpdateUser';
import DeleteUser  from './components/DeleteUser';
import Login       from './components/Login';

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const triggerRefresh = () => setRefreshFlag(prev => !prev);

  return (
    <div className="App">
      <h1>Wedding Event Management</h1>
      <GetUsers   refresh={refreshFlag}    />
      <CreateUser onCreated={triggerRefresh} />
      <UpdateUser onUpdated={triggerRefresh} />
      <DeleteUser onDeleted={triggerRefresh} />
      <Login />
    </div>
  );
}

export default App;