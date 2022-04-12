
import React, { useState, useEffect } from "react";
import Meals from "../Meals.js";

const Brekker = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker    https://feadmeapp-examen-project.herokuapp.com/breakfast
  const fetchCategory = async () => {
    const res = await fetch(
      `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/breakfast`
    );
    const data = await res.json();
    console.log(data.breakfast);
    setCategory(data.breakfast);
  };
  console.log(category);

  if (!{ category }) return;
  return (
    <main className="home-main">
      <header>
        <h2>Breackfast</h2>
      </header>
      <Meals category={category} />
    </main>
  );
};

export default Brekker;
