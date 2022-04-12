import React, { useState, useEffect } from "react";

import Meals from "../Meals.js";

const Lunch = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker    https://feadmeapp-examen-project.herokuapp.com/lunch
  const fetchCategory = async () => {
    const res = await fetch(
      `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/lunch`
    );
    const data = await res.json();
    console.log(data.lunch);
    setCategory(data.lunch);
  };
  console.log(category);
  if (!{ category }) return;

  return (
    <main className="home-main">
      <header>
        <h2>Lunch</h2>
      </header>
      <Meals category={category} />
    </main>
  );
};

export default Lunch;
