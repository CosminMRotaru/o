import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RESTAURANTS } from "../data/restaurants";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo-food-dot">
        Food<span className="logo-dot">.</span>
      </Link>
      <div className="nav-restaurants">
        {RESTAURANTS.map(r => (
          <Link
            key={r.key}
            to={`/${r.key}`}
            className={`nav-btn ${location.pathname === `/${r.key}` ? "active" : ""} ${r.theme}`}
          >
            {r.name}
          </Link>
        ))}
      </div>
      {/* NU adăuga și NU importa niciun cart aici! */}
    </nav>
  );
}

export default Navbar;