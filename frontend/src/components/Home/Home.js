import React from "react";
import baking from "./images/baking.jpg";
import dinner from "./images/brekker.jpg";
import lunch from "./images/lunch.jpg";
import brekker from "./images/dinner.jpg";

import bubble from "./images/bubbla.png";

const Home = () => {
  return (
    <section className="home">
      <header className="home-header">
        <div className="home-title">
          <h3>Explore foods from around the globe.</h3>
          <p>
            Whether you're looking for healthy recipes, or ideas on how to use
            leftovers from your fridge, we've numerous recipes to choose from,
            so you'll be able to find the perfect dish.
          </p>
        </div>
        <div>
          <button>Search Recepies </button>
        </div>
      </header>

      <div className="category-wrapper">
        <article className="category-article">
          <img
            src={brekker}
            width="200"
            height="200"
            alt="choklet"
            style={{ borderRadius: "20px" }}
          />
        </article>

        <article className="category-article">
          <img
            src={lunch}
            width="200"
            height="200"
            alt="choklet"
            style={{ borderRadius: "20px" }}
          />
        </article>
        <article className="category-article">
          <img
            src={dinner}
            width="200"
            height="200"
            alt="choklet"
            style={{ borderRadius: "20px" }}
          />
        </article>

        <article className="category-article">
          <img
            src={baking}
            width="200"
            height="200"
            alt="choklet"
            style={{ borderRadius: "20px" }}
          />
        </article>
      </div>
      <div className="bubbles">
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
      </div>
    </section>
  );
};

export default Home;
