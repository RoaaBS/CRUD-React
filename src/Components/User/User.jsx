import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';
import { Link } from 'react-router-dom';

export default function User() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
      console.log('API Response:', data); 
      setUsers(data.users); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
      console.log(data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, [users]);

  return (
    <div className="card-container">
      {users?.length > 0 ? (
        users.map((user, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5>Name: {user.userName}</h5>
              <p>Email: {user.email}</p>
              <Link className='details' to={`/users/${user._id}`}>Details</Link>
              <button onClick={() => deleteUser(user._id)} className='delete'>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
}
