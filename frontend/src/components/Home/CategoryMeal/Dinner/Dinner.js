import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Meals from "../Meals.js";

const Dinner = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker
  const fetchCategory = async () => {
    const res = await fetch(`http://localhost:5005/dinner`);
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
