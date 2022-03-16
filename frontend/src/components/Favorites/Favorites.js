import React, { useState, useEffect } from "react";

const Favorites = ({ logedin, setLogedin, favorites, setFavorites }) => {
  const [userId, setUserId] = useState();
  // const [favorites, setFavorites] = useState([]);

  console.log("favorites", favorites);

  useEffect(() => {
    setUserId(logedin.user_id);
    if (logedin.user_favs != null) {
      let favString = logedin.user_favs;
      let split = favString.split(",");
      let numbering = split.map((string) => parseInt(string));
      // console.log(numbering);
      //// OBS FÖRSTA GÅNGEN MAN LÄGGER TILL EN FAVORITE KOMMER DET SKAPAS EN NaN ! DÅ FUNGERER INTE DENNA FETCHEN
      const request = numbering.map((number) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`
        ).then((res) => res.json())
      );
      Promise.all(request).then((res) => setFavorites(res));
    } else {
      console.log("null favs");
    }
  }, [logedin]);

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

  if (!Favorites) return null;
  return (
    <div>
      {logedin.userName}
      <h2>My Favorites </h2>

      <div>
        {favorites.map((fav) => (
          <article key={fav.meals[0].idMeal}>
            <img src={fav.meals[0].strMealThumb} alt="#" />
            <h4> {fav.meals[0].strMeal}</h4>

            <button
              id={fav.meals[0].idMeal}
              onClick={(e) => onRemoveFavorite(e.target.id)}
            >
              Remove
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
