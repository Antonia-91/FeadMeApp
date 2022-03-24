import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
/// -- images ---///
import baking from "./images/baking.jpg";
import brunch from "./images/brekker.jpg";
import lunch from "./images/lunch.jpg";
import dinner from "./images/dinner.jpg";
import bubble from "./images/bubbla.png";

const Home = ({ todos, logedin, dates, setDates }) => {
  const [showAll, setShowAll] = useState(true);
  const [showThisMounth, setShowThisMounth] = useState(false);
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

  /// destruct dates and save in array "mounthFromServer" this to this mounts saved daets
  if (dates) {
    for (let i = 0; i < dates.length; i++) {
      console.log(dates[i].date);
      let slice = dates[i].date.slice(5, 7);
      console.log(mounthFromServer);
      mounthFromServer.push(slice);
    }
  }

  //// onclick
  const onclick = () => {
    setShowThisMounth((presState) => !presState);
    setShowAll((presState) => !presState);
  };

  return (
    <main className="home-main">
      <section className="home-top-section">
        <div className={showThisMounth ? "card" : "hide"}>
          <div className="card-content">
            <header className="card-content-header">
              <h2 style={{ textTransform: "capitalize" }}>
                {logedin.userName}s recepies this mounth
              </h2>
              <span
                className="tab"
                //onClick={() => setShowThisMounth((presState) => !presState)}
                onClick={onclick}
              >
                <p>show all</p>
              </span>
            </header>

            {dates?.map((date) => {
              if (date.date.slice(5, 7).includes(mounth)) {
                return (
                  <div className="card-date-info" key={date.meal_id}>
                    <FaTimes style={{ color: "#ff4e50", cursor: "pointer" }} />
                    <p>
                      {date.day} / {date.date.slice(5, 10).replace("-", "/")}
                    </p>
                    <NavLink to={`/${date.meal_id}`}>
                      {" "}
                      {date.meal_title.slice(" ", 20)}...
                    </NavLink>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* hide or show */}

        <div className={showAll ? "card" : "hide"}>
          <div className="card-content">
            <header className="card-content-header">
              <h2 style={{ textTransform: "capitalize" }}>
                {logedin.userName}s recepies this mounth
              </h2>
              <span
                className="tab"
                //onClick={() => setShowThisMounth((presState) => !presState)}
                onClick={onclick}
              >
                <p>Mounth</p>
              </span>
            </header>

            {dates?.map((date) => (
              <div className="card-date-info" key={date.meal_id}>
                <FaTimes style={{ color: "#ff4e50", cursor: "pointer" }} />
                <p>
                  {date.day} / {date.date.slice(5, 10).replace("-", "/")}
                </p>
                <NavLink to={`/${date.meal_id}`}>
                  <p> {date.meal_title.slice(" ", 20)}...</p>
                </NavLink>
              </div>
            ))}
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
