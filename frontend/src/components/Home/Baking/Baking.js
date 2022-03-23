import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Meals from "../Meals.js";

const Baking = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker
  const fetchCategory = async () => {
    const res = await fetch(`http://localhost:5005/baking`);
    const data = await res.json();
    console.log(data.baking);
    setCategory(data.baking);
  };
  console.log(category);
  if (!{ category }) return;
  return (
    <main>
      <header>
        <h2>Baking</h2>
      </header>
      <Meals category={category} />
    </main>
  );
};

export default Baking;
