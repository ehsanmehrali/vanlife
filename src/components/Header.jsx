import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const activeNav = ({ isActive }) => (isActive ? activeStyle : null);

  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink to="host" style={activeNav}>
          Host
        </NavLink>
        <NavLink to="/about" style={activeNav}>
          About
        </NavLink>
        <NavLink to="/vans" style={activeNav}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
