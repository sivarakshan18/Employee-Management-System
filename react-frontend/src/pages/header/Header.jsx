import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="custom-navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          <strong>Employee Management System</strong>
        </Link>
        <nav className="nav-links">
          <Link to="/">Employees</Link>
          <Link to="/employee">Add Employee</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
