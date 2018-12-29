import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/news' className="brand-logo">News</Link>
        <Links />
      </div>
    </nav>
  )
}

export default Navbar;
