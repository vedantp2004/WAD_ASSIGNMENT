// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Expense Tracker</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Expense</Link></li>
        <li><Link to="/edit">Edit Expense</Link></li>
        <li><Link to="/delete">Delete Expense</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
