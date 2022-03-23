import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Meals from "../Meals.js";

const Lunch = () => {
  const [category, setCategory] = useState();
 

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker
  const fetchCategory = async () => {
    const res = await fetch(`http://localhost:5005/lunch`);
    const data = await res.json();
    console.log(data.lunch);
    setCategory(data.lunch);
  };
  console.log(category);
  if (!{ category }) return;

  return (
    <main>
      <header>
        <h2>Lunch</h2>
      </header>
      <Meals category={category} />
    </main>
  );
};

export default Lunch;
