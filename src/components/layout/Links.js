import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to='/search'>
          <i className="material-icons">search</i>
        </NavLink>
      </li>
      <li>
        <NavLink to='/saves'>
          <i className="material-icons">favorite_border</i>
        </NavLink>
      </li>
    </ul>
  )
}

export default Links;
