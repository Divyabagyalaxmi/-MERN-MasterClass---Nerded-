// App.js
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const addUser = (name, email) => {
    const newUser = { id: Date.now(), name, email };
    setUsers([...users, newUser]);
  };

  const editUser = (user) => {
    setCurrentUser(user);
    setEditMode(true);
  };

  const updateUser = (id, name, email) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, name, email } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <UserForm
        addUser={addUser}
        editUser={updateUser}
        editMode={editMode}
        currentUser={currentUser}
        setEditMode={setEditMode}
      />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
