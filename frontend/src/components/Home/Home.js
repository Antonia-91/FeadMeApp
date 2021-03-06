import React, { useState, useEffect } from "react";
import CardPersona from "./CardPersona";
import CardMounth from "./CardMounth";
import CardYear from "./CardYear";
import MiddleSection from "./MiddleSection";
import Box from "./Box";
import CategoryWrapper from "./CategoryWrapper";

const Home = ({ todos, logedin, dates, setDates, url }) => {
  const [showAll, setShowAll] = useState(true);
  const [showThisMounth, setShowThisMounth] = useState(false);
  const currentDate = new Date();
  const mounth = currentDate.getMonth() + 1;
  let mounthFromServer = [];

  console.log(mounth, "&", dates, mounthFromServer);

  useEffect(() => {
    //console.log(currentDate, mounth);
    const getAllDates = async () => {
      let idToServer = logedin.user_id;
      const datesFromServer = await fechAllDates(idToServer);
      setDates(datesFromServer);
    };
    getAllDates();
  }, [logedin]);

  /// fetch all Dates
  //https://feadmeapp-examen-project.herokuapp.com/date/${id}
  // https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/date/${id}
  //`http://localhost:5005/date/${id}`
  const fechAllDates = async (id) => {
    const res = await fetch(
      `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/date/${id}`
    );
    const data = await res.json();

    return data;
  };

  /// destruct dates and save in array "mounthFromServer" this to this mounts saved daets
  if (dates) {
    for (let i = 0; i < dates.length; i++) {
      // console.log(dates[i].date);
      let slice = dates[i].date.slice(5, 7);
      //console.log(mounthFromServer);
      mounthFromServer.push(slice);
    }
  }

  //// onclick , switch between card (view)
  const onclick = () => {
    setShowThisMounth((presState) => !presState);
    setShowAll((presState) => !presState);
  };

  //// on delete   
  //  https://feadmeapp-examen-project.herokuapp.com/date/${id}
  // https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/date/${id}
  // `http://localhost:5005/date/${id}`
  const onDelete = async (id) => {
    console.log(id);

    if (window.confirm("delete this date?")) {
      await fetch(
        `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/date/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "delete success") {
            setDates(dates.filter((date) => date.date_id !== id));
          }
        });
    }
  };

  return (
    <main className="home-main">
      <h2>Home</h2>
      <section className="home-top-section">
        <CardPersona logedin={logedin} />

        <CardMounth
          showThisMounth={showThisMounth}
          dates={dates}
          mounth={mounth}
          onclick={onclick}
          onDelete={onDelete}
        />

        {/* hide or show */}
        <CardYear
          showAll={showAll}
          dates={dates}
          onclick={onclick}
          onDelete={onDelete}
        />
      </section>
      <Box />

      <section className="home-middle-section">
        <MiddleSection />
      </section>

      <section className="category-wrapper">
        <CategoryWrapper />
      </section>
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
