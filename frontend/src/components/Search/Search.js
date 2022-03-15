import React, { useState } from "react";
import {  NavLink } from "react-router-dom";


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

  /// add to fav
  const addFav = async (id) => {
    //console.log(id)

    let obj = {
      userId: logedin.user_id,
      mealId: id,
    };
    console.log(obj);
    await fecthFav(obj);
  };

  /// post fav to Db
  const fecthFav = async (obj) => {
    const res = await fetch(`http://localhost:5005/addFav`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    console.log(data);
    let result = data.data;
    let join = result.join();

    let updateUserInfo = {
      userName: logedin.userName,
      userPass: logedin.userPass,
      user_favs: join,
      user_id: logedin.user_id,
    };

    // console.log("logedin", logedin);
    // console.log("updateUserInfo", updateUserInfo);
    setUdatedFavs(join);
    setLogedin(updateUserInfo);
  };
  // console.log(updatedFavs);
   console.log(logedin);
  //console.log(meals);

  return (
    <div>
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
        {meals.map((meal) => (
          <article key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="#" />
            <div>
              {/* <NavLink to={`/${meal.idMeal}`}>
                {" "}
                <h4>{meal.strMeal}</h4>
              </NavLink> */}

              <button onClick={() => addFav(meal.idMeal)}> add </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Search;
