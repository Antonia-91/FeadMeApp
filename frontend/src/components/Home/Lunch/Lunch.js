import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Lunch = () => {
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
    <main className="baking-main">
      <h2>Lunch</h2>
      <section className="meals-wrapper">
        {category?.map((meal) => (
          <article className="meals-article" key={meal.idMeal}>
            <img src={meal.strMealThumb} />
            <div className="meals-info">
              <NavLink to={`/category/${meal.idMeal}`}>
                <h4>{meal.title.split(" ", 3)}...</h4>
              </NavLink>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Lunch;
