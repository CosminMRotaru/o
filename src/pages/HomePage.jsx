import React from "react";
import { Link } from "react-router-dom";

function HomePage({ restaurantNames }) {
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
          <Link to="/jimmy" className="homepage-restaurant-card jimmy-theme">
            <span className="homepage-restaurant-card-title">
              {restaurantNames.jimmy}
            </span>
          </Link>
          <Link to="/pasta" className="homepage-restaurant-card pasta-theme">
            <span className="homepage-restaurant-card-title">
              {restaurantNames.pasta}
            </span>
          </Link>
          <Link to="/sushi" className="homepage-restaurant-card sushi-theme">
            <span className="homepage-restaurant-card-title">
              {restaurantNames.sushi}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;