import React from "react";
import baking from "./images/baking.jpg";
import dinner from "./images/brekker.jpg";
import lunch from "./images/lunch.jpg";
import brekker from "./images/dinner.jpg";

const Home = () => {
  return (
    <section className="home">
      <h3>Home</h3>

      <div className="category-wrapper">
        <article className="category-article">
          <img src={brekker} width="200" height="200" alt="choklet" />
        </article>

        <article className="category-article">
          <img src={lunch} width="200" height="200" alt="choklet" />
        </article>
        <article className="category-article">
          <img src={dinner} width="200" height="200" alt="choklet" />
        </article>

        <article className="category-article">
          <img src={baking} width="200" height="200" alt="choklet" />
        </article>
      </div>
    </section>
  );
};

export default Home;
