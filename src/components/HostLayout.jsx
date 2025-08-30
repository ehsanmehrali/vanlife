import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeNav = ({ isActive }) => (isActive ? "active-link" : undefined);

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end className={activeNav}>
          Dashboard
        </NavLink>
        <NavLink to="income" className={activeNav}>
          Income
        </NavLink>
        <NavLink to="vans" className={activeNav}>
          Vans
        </NavLink>
        <NavLink to="reviews" className={activeNav}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
