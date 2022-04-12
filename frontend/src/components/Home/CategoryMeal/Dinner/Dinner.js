import React, { useState, useEffect } from "react";

import Meals from "../Meals.js";

const Dinner = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker   https://feadmeapp-examen-project.herokuapp.com/dinner
  const fetchCategory = async () => {
    const res = await fetch(
      `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/dinner`
    );
    const data = await res.json();
    console.log(data.dinner);
    setCategory(data.dinner);
  };
  console.log(category);
  if (!{ category }) return;

  return (
    <main className="home-main">
      <header>
        <h2>Dinner</h2>
      </header>
      <Meals category={category} />
    </main>
  );
};

export default Dinner;
