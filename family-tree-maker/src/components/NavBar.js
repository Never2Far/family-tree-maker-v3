import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      {/* <NavLink 
        style={{ marginRight: '10px' }} 
        to="/signup"
      >
        Sign Up
        </NavLink> */}
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
      Relatives
    </NavLink>
    <NavLink
      style={{ marginRight: '10px' }} 
      to="/logout"
    >
      Log Out
    </NavLink>
    </div>
  );
}

export default NavBar;
