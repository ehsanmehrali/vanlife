import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeNav = ({ isActive }) => (isActive ? "active-link" : undefined);

  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink to="host" className={activeNav}>
          Host
        </NavLink>
        <NavLink to="/about" className={activeNav}>
          About
        </NavLink>
        <NavLink to="/vans" className={activeNav}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
