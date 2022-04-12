import React from "react";
import { NavLink } from "react-router-dom";


const MiddleSection = () => {
  return (
    <article className="home-search">
     
      <div className="home-title">
        <h2>Explore foods from around the globe.</h2>
        <p>
          Whether you're looking for healthy recipes, or ideas on how to use
          leftovers from your fridge, we've numerous recipes to choose from, so
          you'll be able to find the perfect dish.
        </p>
      </div>
      <div>
        <NavLink to="/seach">
          {" "}
          <button>Search Recepies </button>
        </NavLink>
      </div>
    </article>
  );
};

export default MiddleSection;
