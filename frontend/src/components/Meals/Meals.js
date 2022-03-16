import React from "react";
import { NavLink } from "react-router-dom";

const Meals = ({ meals, logedin, setLogedin }) => {
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

  return (
    <>
      {meals.map((meal) => (
        <article className="search-article" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={`${meal.strMeal}`} />
          <div>
            <NavLink to={`/${meal.idMeal}`}>
              <h4>{meal.strMeal}</h4>
            </NavLink>

            <button onClick={() => addFav(meal.idMeal)}> add </button>
          </div>
        </article>
      ))}
    </>
  );
};

export default Meals;
