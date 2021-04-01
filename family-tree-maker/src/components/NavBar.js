import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Dashboard
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/profile"
      >
        About Me
      </NavLink>
        {/* <NavLink
        style={{ marginRight: '10px' }} 
        to="/login"
      >
        Login
      </NavLink> */}

      
      <NavLink
      style={{ marginRight: '10px' }} 
      to="/relatives"
    >
      My Family
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
