// UserForm.js
import React, { useState } from 'react';

const UserForm = ({ addUser, editUser, editMode, currentUser, setEditMode }) => {
  const [name, setName] = useState(editMode ? currentUser.name : '');
  const [email, setEmail] = useState(editMode ? currentUser.email : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Please fill out all fields.');
      return;
    }
    if (editMode) {
      editUser(currentUser.id, name, email);
      setEditMode(false);
    } else {
      addUser(name, email);
    }
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">{editMode ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
