import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

const Favorites = ({ logedin, setLogedin, favorites, setFavorites }) => {
  //console.log("favorites", favorites);
  console.log(logedin);

  useEffect(() => {
    // setUserId(logedin.user_id);
    if (logedin.user_favs != null) {
      let favString = logedin.user_favs;
      let split = favString.split(",");
      let numbering = split.map((string) => parseInt(string));
      //console.log(numbering);

      const request = numbering.map((number) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`
        ).then((res) => res.json())
      );
      Promise.all(request).then((res) => setFavorites(res));
      //console.log(favorites.map((fav) => fav.meals[0].idMeal)
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
    console.log("obj", obj);
    await removeFavorite(obj);
  };

  //// post remove to Db
  /// https://feadmeapp-examen-project.herokuapp.com/removeFav
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
    /// filter array favorites. sort out the one who has the same ID that we just deleted
    if ((data.message = "success")) {
      let filtered = favorites.filter(
        (fav) => fav.meals[0].idMeal != obj.mealId
      );
      console.log("filtered", filtered);
      setFavorites(filtered);

      /// pick out all the favorites' id, make a string and (join)
      let sliceFiltered = filtered.map((fav) => fav.meals[0].idMeal);
      console.log("sliceFiltered", sliceFiltered);
      let join = sliceFiltered.join();

      /// take our joined string and update our logiedin user (user_favs: join)
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
    <main className="favorite-main">
      <h2>My Favorites</h2>
      <section className="favorite-wrapper">
        {favorites.map((fav) => (
          <article className="favorite-article" key={fav.meals[0].idMeal}>
            <img src={fav.meals[0].strMealThumb} alt={fav.meals[0].strMeal} />
            <div className="favorite-info">
              <NavLink to={`/${fav.meals[0].idMeal}`}>
                <h4> {fav.meals[0].strMeal.slice(" ", 20)}...</h4>
              </NavLink>
              <div className="icon-holder">
                <a
                  href={fav.meals[0].strYoutube}
                  target="_blank"
                  rel="nereferrer"
                >
                  <FaYoutube />
                </a>
                <FaHeartBroken
                  onClick={(e) => onRemoveFavorite(fav.meals[0].idMeal)}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Favorites;

// useEffect(() => {
//   if(favorites.length != null){
//     //  let user_favs = favorites.map((fav) => fav.meals[0].idMeal).join();
//     // console.log("user_favs", user_favs);

//     // let updateUserInfo = {
//     //   userName: logedin.userName,
//     //   userPass: logedin.userPass,
//     //   user_favs: user_favs,
//     //   user_id: logedin.user_id,
//     // };

//     // console.log("updateUserInfo", updateUserInfo);
//     // setLogedin(updateUserInfo);
//   }
// })
