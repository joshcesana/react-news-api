import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>News</NavLink></li>
      <li><NavLink to='/'>Tech</NavLink></li>
      <li><NavLink to='/'>Ent</NavLink></li>
      <li><NavLink to='/'>Faves</NavLink></li>
    </ul>
  )
}

export default Links;
