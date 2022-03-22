import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
/// -- images ---///
import baking from "./images/baking.jpg";
import breakfast from "./images/breakFast.jpg";
import brunch from "./images/brekker.jpg";
import lunch from "./images/lunch.jpg";
import dinner from "./images/dinner.jpg";
import listImg from "./images/list.png";
import bubble from "./images/bubbla.png";

import moment from "moment"; // use tihs?

const Home = ({ todos, logedin, dates, setDates }) => {
  console.log(logedin);
  console.log(dates);

  useEffect(() => {
    const getAllDates = async () => {
      let idToServer = logedin.user_id;
      const datesFromServer = await fechAllDates(idToServer);

      setDates(datesFromServer);
    };
    getAllDates();
  }, [logedin]);

  /// fetch all Dates
  const fechAllDates = async (id) => {
    const res = await fetch(`http://localhost:5005/date/${id}`);
    const data = await res.json();

    return data;
  };

  return (
    <main className="home">
      <section className="home-top-section">
        <div className="card">
          <div className="card-content">
            <h3 style={{ textTransform: "capitalize" }}>
              {logedin.userName}s week:
            </h3>
            <ul>
              {/* {dates?.map((date) => (
                <li key={date.meal_id}>
                  <NavLink to={`/${date.meal_id}`}>
                    {date.date} : {date.meal_id}
                  </NavLink>
                </li>
              ))} */}
            </ul>
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
            <NavLink to="/seach">
              {" "}
              <button>Search Recepies </button>
            </NavLink>
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

// const current = new Date();
// const date = `${current.getDate()}/${
//   current.getMonth() + 1
// }/${current.getFullYear()} /${current.getDate()}`;

// // console.log(moment(date).week());
// // console.log(moment(date).isoWeek());
