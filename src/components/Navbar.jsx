import React from "react";
import { Link, useLocation } from "react-router-dom";

const restaurants = [
  { name: "Jimmy", to: "/jimmy", theme: "jimmy-theme" },
  { name: "Pasta", to: "/pasta", theme: "pasta-theme" },
  { name: "Sushi", to: "/sushi", theme: "sushi-theme" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo-food-dot">
        Food<span className="logo-dot">.</span>
      </Link>
      <div className="nav-restaurants">
        {restaurants.map((r) => (
          <Link
            key={r.name}
            to={r.to}
            className={`nav-btn ${location.pathname === r.to ? "active" : ""} ${r.theme}`}
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