import React, { useState, useEffect } from "react";
import Meals from "./Meals.js";

const Baking = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker https://feadmeapp-examen-project.herokuapp.com/baking
  const fetchCategory = async () => {
    const res = await fetch(
      `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/baking`
    );
    const data = await res.json();
    console.log(data.baking);
    setCategory(data.baking);
  };
  console.log(category);
  if (!{ category }) return;
  return (
    <main className="home-main">
      <header>
        <h2>Baking</h2>
      </header>
      <Meals category={category} />
    </main>
  );
};

export default Baking;
