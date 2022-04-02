import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

const Meals = ({ meals, logedin, setLogedin, favorites, setFavorites }) => {
  /// add to fav
  const addFav = async (id) => {
    console.log(id);

    let obj = {
      userId: logedin.user_id,
      mealId: id,
    };
    console.log(obj);
    await fecthFav(obj);
  };

  /// post fav to Db
  // https://corsanywhere.herokuapp.com/ ?
  // https://feadmeapp-examen-project.herokuapp.com/addFav
  // `http://localhost:5005/addFav`
  const fecthFav = async (obj) => {
    const res = await fetch(
      `https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/addFav`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    const data = await res.json();
    console.log(data);
    let result = data.data;
    let join = result.join();
    console.log(join);

    let updateUserInfo = {
      userName: logedin.userName,
      userPass: logedin.userPass,
      user_favs: join,
      user_id: logedin.user_id,
    };

    // setUdatedFavs(join);
    console.log(updateUserInfo);
    setLogedin(updateUserInfo);
  };
  console.log(logedin?.user_favs);

  //// remove from fav
  const onRemoveFavorite = async (id) => {
    console.log(id);
    let obj = {
      userId: logedin.user_id,
      mealId: id,
    };
    await removeFavorite(obj);
  };

  //// post remove to Db   https://feadmeapp-examen-project.herokuapp.com/removeFav
  // http://localhost:5005/removeFav
  const removeFavorite = async (obj) => {
    const res = await fetch(
      "https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/removeFav",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    const data = await res.json();
    console.log(data);
    if ((data.message = "success")) {
      let filtered = favorites.filter(
        (fav) => fav.meals[0].idMeal != obj.mealId
      );
      console.log("filtered", filtered);
      setFavorites(filtered);

      let sliceFiltered = filtered.map((fav) => fav.meals[0].idMeal);
      console.log("sliceFiltered", sliceFiltered);

      let join = sliceFiltered.join();

      let updateUserInfo = {
        userName: logedin.userName,
        userPass: logedin.userPass,
        user_favs: join,
        user_id: logedin.user_id,
      };

      setLogedin(updateUserInfo);
    }
  };

  //console.log(meals.map((meal) => meal.strMeal.length));

  return (
    <>
      {meals.map((meal) => (
        <article className="meals-article" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={`${meal.strMeal}`} />
          <div className="meals-info">
            <NavLink to={`/${meal.idMeal}`}>
              <h4>{meal.strMeal.slice(" ", 20)}...</h4>
              <p>3497 kJ (836 kcal)</p>
            </NavLink>
            <>
              {!logedin?.user_favs.includes(meal.idMeal) ? (
                <div className="icon-holder">
                  <a href={meal.strYoutube} target="_blank" rel="nereferrer">
                    <FaYoutube />
                  </a>
                  <i
                    onClick={() => addFav(meal.idMeal)}
                    class="fas fa-heart"
                  ></i>
                </div>
              ) : (
                <div className="icon-holder">
                  <a href={meal.strYoutube} target="_blank" rel="nereferrer">
                    <FaYoutube />
                  </a>
                  <FaHeartBroken
                    onClick={(e) => onRemoveFavorite(meal.idMeal)}
                  />
                </div>
              )}
            </>
          </div>
        </article>
      ))}
    </>
  );
};

export default Meals;
