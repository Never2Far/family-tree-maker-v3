import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/home"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/profile"
      >
        Profile
      </NavLink>

      
      <NavLink
      style={{ marginRight: '10px' }} 
      to="/relatives"
    >
      My Family
    </NavLink>

    <NavLink
      style={{ marginRight: '10px' }} 
      to="/tree"
    >
      Tree
    </NavLink>

    <NavLink
      style={{ marginRight: '10px', float: 'right' }} 
      to="/logout"
    >
      Log Out
    </NavLink>
    </div>
  );
}

export default NavBar;
