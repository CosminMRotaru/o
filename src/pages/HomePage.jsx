import React from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS } from "../data/restaurants";

function HomePage() {
  return (
    <div className="homepage-root-bg">
      <div className="homepage-center">
        {/* Titlul mare FOOD. cu punct mov */}
        <div className="homepage-logo-new">
          FOOD
          <span className="homepage-logo-dot-new">.</span>
        </div>
        {/* Subtitlu cu nota de mov folosind text-shadow */}
        <div className="homepage-subtitle-new subtitle-purple-glow">
          LET THE CRAVINGS DECIDE
        </div>
        <div className="homepage-restaurant-grid">
          {RESTAURANTS.map(r => (
            <Link key={r.key} to={`/${r.key}`} className={`homepage-restaurant-card ${r.theme}`}>
              <span className="homepage-restaurant-card-title">{r.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;