import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="flex1">
      <img
        alt="my-img"
        src="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png"
      ></img>
      <NavLink to="/">Movies</NavLink>
      <NavLink to="/favorite">Favorites</NavLink>
    </div>
  );
}

export default Header