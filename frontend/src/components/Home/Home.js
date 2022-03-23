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
  //console.log(logedin);
  //console.log(dates);

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

  // //// fetchBrekker
  // const fetchCategory = async (id) => {
  //   console.log(id);
  //   const res = await fetch(`http://localhost:5005/${id}`);
  //   const data = await res.json();
  //   console.log(data);
  //   setCategory(data);
  // };

  return (
    <main className="home">
      <section className="home-top-section">
        <div className="card">
          <div className="card-content">
            <h2 style={{ textTransform: "capitalize" }}>
              {logedin.userName}s week:
            </h2>
            <ul>
              {dates?.map((date) => (
                <li key={date.meal_id}>
                  <NavLink to={`/${date.meal_id}`}>
                    {date.day} : {date.meal_title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-middle-section">
        <article className="home-search">
          <div className="home-title">
            <h2>Explore foods from around the globe.</h2>
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

      <section className="category-wrapper">
        <NavLink className="nav-links" to="/breakfast/">
          <article
            className="category-article"
            // onClick={(e) => fetchCategory(e.target.id)}
          >
            <img
              id="breakfast"
              src={brunch}
              width="200"
              height="200"
              alt="avocado sandwish"
              style={{ borderRadius: "20px" }}
            />
          </article>
        </NavLink>

        <NavLink className="nav-links" to="/lunch">
          <article
            className="category-article"
            // onClick={(e) => fetchCategory(e.target.id)}
          >
            <img
              id="lunch"
              src={lunch}
              width="200"
              height="200"
              alt="spagetti and tomato dish"
              style={{ borderRadius: "20px" }}
            />
          </article>
        </NavLink>
        <NavLink className="nav-links" to="/dinner">
          <article
            className="category-article"
            //onClick={(e) => fetchCategory(e.target.id)}
          >
            <img
              id="dinner"
              src={dinner}
              width="200"
              height="200"
              alt="bown with shripms"
              style={{ borderRadius: "20px" }}
            />
          </article>
        </NavLink>
        <NavLink className="nav-links" to="/baking">
          <article
            className="category-article"
            // onClick={(e) => fetchCategory(e.target.id)}
          >
            <img
              id="baking"
              src={baking}
              width="200"
              height="200"
              alt="choklet"
              style={{ borderRadius: "20px" }}
            />
          </article>
        </NavLink>
      </section>
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
