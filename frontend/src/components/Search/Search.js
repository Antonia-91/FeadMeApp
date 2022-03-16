import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Meals from "../Meals/Meals";

const Search = ({ logedin, setLogedin }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [updatedFavs, setUdatedFavs] = useState();
  console.log(meals);

  /// fetch meals
  const fetchMealsHandler = () => {
    fetchMeals(searchTerm);
  };

  /// fetch meals by searchterm
  const fetchMeals = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => setMeals(data.meals));
  };

 


  return (
    <main className="search-main">
      search Recepires{" "}
      <div className="search">
        <input
          type="text"
          placeholder="Type a meal name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <section>
      <Meals meals={meals} logedin={logedin} setLogedin={setLogedin}/>
        {/* {meals.map((meal) => (
          <article className="search-article" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={`${meal.strMeal}`} />
            <div>
              <NavLink to={`/${meal.idMeal}`}>
                <h4>{meal.strMeal}</h4>
              </NavLink>

              <button onClick={() => addFav(meal.idMeal)}> add </button>
            </div>
          </article>
        ))} */}
      </section>
    </main>
  );
};

export default Search;
