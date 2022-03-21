import React from "react";
import baking from "./images/baking.jpg";
import breakfast from "./images/breakFast.jpg";
import brunch from "./images/brekker.jpg";
import lunch from "./images/lunch.jpg";
import dinner from "./images/dinner.jpg";
import listImg from "./images/list.png";
import { NavLink } from "react-router-dom";
import moment from "moment";

import bubble from "./images/bubbla.png";

const Home = ({ todos, logedin }) => {
  console.log(logedin);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} /${current.getDate()}`;

  // console.log(moment(date).week());
  // console.log(moment(date).isoWeek());

  return (
    <main className="home">
      <section className="home-top-section">
        <div className="card">
          <div className="card-content">
            <h3 style={{ textTransform: "capitalize" }}>
              {logedin.userName}s week: - {date}
            </h3>
            <p>WensDay: eggBenedict, go to recepie</p>
            <p>Friday</p>
            <p></p>
            {/* <NavLink className="nav-links" to="/calendar">
              <h4>Calendar</h4>
            </NavLink> */}
          </div>
        </div>
      </section>

      <section className="home-middle-section">
        <article className="home-search">
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
        </article>
      </section>

      <div className="category-wrapper">
        <article className="category-article">
          <img
            src={brunch}
            width="200"
            height="200"
            alt="avocado sandwish"
            style={{ borderRadius: "20px" }}
          />
        </article>

        <article className="category-article">
          <img
            src={lunch}
            width="200"
            height="200"
            alt="spagetti and tomato dish"
            style={{ borderRadius: "20px" }}
          />
        </article>
        <article className="category-article">
          <img
            src={dinner}
            width="200"
            height="200"
            alt="bown with shripms"
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
    </main>
  );
};

export default Home;
