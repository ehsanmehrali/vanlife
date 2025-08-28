import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeNav = ({ isActive }) => (isActive ? "active-link" : undefined);

  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host" end className={activeNav}>
          Dashboard
        </NavLink>
        <NavLink to="/host/income" className={activeNav}>
          Income
        </NavLink>
        <NavLink to="/host/reviews" className={activeNav}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
