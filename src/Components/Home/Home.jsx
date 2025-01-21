import React from 'react';
import './Home.css'
import  user  from '../../assets/users.png'
const Home = () => {
  return (
    <div>
  
      <header >
        <h1 >CRUD Users</h1>
      </header>

      <main>
      <img src={user} alt="Logo" />;
        <h2>Welcome to the CRUD Users Management System</h2>
        <p>
          Manage your users with ease. Use the buttons in Navbar to view, add, edit, or delete users.
        </p>
      </main>

    </div>
  );
};

export default Home;
