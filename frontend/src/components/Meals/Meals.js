import React from "react";
import { NavLink } from "react-router-dom";

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

  //// post remove to Db
  const removeFavorite = async (obj) => {
    const res = await fetch("http://localhost:5005/removeFav", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
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

  return (
    <>
      {meals.map((meal) => (
        <article className="search-article" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={`${meal.strMeal}`} />
          <div>
            <NavLink to={`/${meal.idMeal}`}>
              <h4>{meal.strMeal}</h4>
            </NavLink>
            <>
              {!logedin?.user_favs.includes(meal.idMeal) ? (
                <i onClick={() => addFav(meal.idMeal)} class="fas fa-heart"></i>
              ) : (
                <i
                  class="fas fa-trash"
                  onClick={(e) => onRemoveFavorite(e.target.id)}
                ></i>
              )}
            </>
          </div>
        </article>
      ))}
    </>
  );
};

export default Meals;
