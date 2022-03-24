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

const Home = ({ todos, logedin, dates, setDates }) => {
  //const [currentDate, setCurrentDate] = useState(new Date());
  const currentDate = new Date();
  const mounth = currentDate.getMonth() + 1;
  let mounthFromServer = [];
  console.log(dates);

  useEffect(() => {
    console.log(currentDate, mounth);
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

  /// destruct dates and save in array "mounthFromServer"
  if (dates) {
    for (let i = 0; i < dates.length; i++) {
      console.log(dates[i].date);
      let slice = dates[i].date.slice(5, 7);
      console.log(mounthFromServer);
      mounthFromServer.push(slice);
    }
  }
  console.log(mounthFromServer);

  mounthFromServer.filter((date) => {
    if (date.includes(mounth)) {
      console.log(date);
    }
  });

  return (
    <main className="home-main">
      <section className="home-top-section">
        <div className="card">
          <div className="card-content">
            <h2 style={{ textTransform: "capitalize" }}>
              {logedin.userName}s recepies this mounth
            </h2>
            <ul>
              {dates?.map((date) => {
                if (date.date.slice(5, 7).includes(mounth)) {
                  return (
                    <li key={date.meal_id}>
                      {date.day} / {date.date.slice(5, 10).replace("-", "/")}
                      <NavLink to={`/${date.meal_id}`}>
                        {" "}
                        {date.meal_title.slice(" ", 20)}...
                      </NavLink>
                    </li>
                  );
                }
              })}

              {/* {dates?.map((date) => (
                <li key={date.meal_id}>
                  {date.day} / {date.date.slice(5, 10).replace("-", "/")}
                  <NavLink to={`/${date.meal_id}`}>
                    {" "}
                    {date.meal_title.slice(" ", 20)}...
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
        <NavLink className="nav-links" to="/breakfast">
          <article className="category-article">
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
          <article className="category-article">
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
          <article className="category-article">
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
          <article className="category-article">
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
