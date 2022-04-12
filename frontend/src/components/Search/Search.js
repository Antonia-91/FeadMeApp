import React, { useState } from "react";
import Pagenotfount from "../pagenotfount";
import Meals from "../Meals/Meals";

const Search = ({ logedin, setLogedin, favorites, setFavorites }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);

  console.log(meals);

  /// fetch meals
  const fetchMealsHandler = () => {
    fetchMeals(searchTerm);
    setSearchTerm("");
  };

  /// fetch meals by searchterm
  const fetchMeals = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => setMeals(data.meals));
  };
  if (!meals)
    return (
      <main className="search-main">
        <Pagenotfount />
      </main>
    );
  return (
    <main className="search-main">
      <div className="seach-section">
        <h2>Search through tousends of recipes</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Type a meal name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={fetchMealsHandler}>Search</button>
        </div>
      </div>

      <section className="meals-wrapper">
        <Meals
          meals={meals}
          logedin={logedin}
          setLogedin={setLogedin}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </section>
    </main>
  );
};

export default Search;
