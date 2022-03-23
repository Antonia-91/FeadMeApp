import { NavLink, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Meals from "../Meals.js";

const Brekker = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  //// fetchBrekker
  const fetchCategory = async () => {
    const res = await fetch(`http://localhost:5005/breakfast`);
    const data = await res.json();
    console.log(data.breakfast);
    setCategory(data.breakfast);
  };
  console.log(category);

  if (!{ category }) return;
  return (
    <main>
    <header>
      <h2>Breackfast</h2>
    </header>
    <Meals category={category} />
  </main>
  );
};

export default Brekker;
