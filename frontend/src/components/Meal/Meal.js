import React, { useState, useEffect } from "react";
import PickDate from "./pickDate/PickDate";
import {  useParams } from "react-router-dom";
import { FaYoutube, FaCalendar } from "react-icons/fa";
import Form from "./Form";

const Meal = ({ logedin, todos, setTodos, dates, setDates }) => {
  const [meal, setMeal] = useState();
  const [show, setShow] = useState(false);
  console.log(show);

  // get id from URL
  let { id } = useParams();

  useEffect(() => {
    fetchSingekMeal(id);
  }, [id]);

  /// fetch meal by id
  const fetchSingekMeal = async (id) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((data) => data.json())
      .then((data) => setMeal(data.meals[0]));
  };

  if (!meal) return null;
  return (
    <main className="meal-main">
      <header className="meal-header">
        <div
          className="meal-header-saved"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <FaCalendar />
        </div>
        <p className="first">{meal.strMeal}</p>
        <p className="second">
          {" "}
          Category: <span>{meal.strCategory}</span>{" "}
        </p>
        <a href={meal.strYoutube} target="_blank" rel="nereferrer">
          <FaYoutube /> video Insuctions
        </a>
      </header>

      <section className="meal-wrapper">
        <article className="meal-article">
          <img src={meal.strMealThumb} alt={`${meal.strMeal}`} />
          <div className="meal-instructions">
            <h3>Instructions</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </article>

        <div className="meal-article-wrapper">
          <article className="meal-measure-holder">
            <h3>Ingridience</h3>
            <div className="meal-measure">
              <ul>
                <li>{meal?.strIngredient1}</li>
                <li>{meal?.strIngredient2}</li>
                <li>{meal?.strIngredient3}</li>
                <li>{meal?.strIngredient4}</li>
                <li>{meal?.strIngredient5}</li>
                <li>{meal?.strIngredient6}</li>
                <li>{meal?.strIngredient7}</li>
                <li>{meal?.strIngredient8}</li>
                <li>{meal?.strIngredient9}</li>
                <li>{meal?.strIngredient10}</li>
                <li>{meal?.strIngredient11}</li>
              </ul>

              <ul>
                <li>{meal?.strMeasure1}</li>
                <li>{meal?.strMeasure2}</li>
                <li>{meal?.strMeasure3}</li>
                <li>{meal?.strMeasure4}</li>
                <li>{meal?.strMeasure5}</li>
                <li>{meal?.strMeasure6}</li>
                <li>{meal?.strMeasure7}</li>
                <li>{meal?.strMeasure8}</li>
                <li>{meal?.strMeasure9}</li>
                <li>{meal?.strMeasure10}</li>
                <li>{meal?.strMeasure11}</li>
              </ul>
            </div>
          </article>

          <article className="meal-form">
            <h3>Add to shoppinglist</h3>
            <Form logedin={logedin} todos={todos} setTodos={setTodos} />
          </article>
        </div>
      </section>
      <div className={show ? "date-holder" : "hide"}>
        <PickDate
          meal={meal.strMeal}
          logedin={logedin}
          dates={dates}
          setDates={setDates}
        />
      </div>
    </main>
  );
};

export default Meal;

