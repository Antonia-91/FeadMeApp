import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Meal from "./components/Meal/Meal";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Shoppinglist from "./components/Shoppinglist/Shoppinglist";
import Brekker from "./components/Home/CategoryMeals/Brekker";
import Lunch from "./components/Home/CategoryMeals/Lunch";
import Dinner from "./components/Home/CategoryMeals/Dinner";
import Baking from "./components/Home/CategoryMeals/Baking";
import CategoryMeal from "./components/Home/CategoryMeals/CategoryMeal";
import Footer from "./components/Footer/Footer";

import "./css/App.css";
import About from "./components/Footer/About";

function App() {
  //---- Global variables ----//
  let url = "http://localhost:5005";
  // let url = "https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com"

  const [user, setUser] = useState();
  const [logedin, setLogedin] = useState();
  const [todos, setTodos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [dates, setDates] = useState();

  useEffect(() => {
    const getUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    //console.log(getUser);
    setLogedin(getUser);
  }, [user]);

  // when Deploying on gh-pages
  /// <Route exact path="/your-project-repo's-name" component={HomeContainer} />

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar logedin={logedin} setLogedin={setLogedin} />

        <Routes>
          <>
            {logedin && (
              <Route
                exact
                path="/home"
                element={
                  <Home
                    url={url}
                    logedin={logedin}
                    todos={todos}
                    dates={dates}
                    setDates={setDates}
                  />
                }
              />
            )}

            {logedin && <Route path="/breakfast" element={<Brekker />} />}
            {logedin && <Route path="/lunch" element={<Lunch />} />}
            {logedin && <Route path="/dinner" element={<Dinner />} />}
            {logedin && <Route path="/baking" element={<Baking />} />}
            {logedin && (
              <Route path="/category/:id" element={<CategoryMeal />} />
            )}
            {logedin && (
              <Route
                path="/seach"
                element={
                  <Search
                    logedin={logedin}
                    setLogedin={setLogedin}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                }
              />
            )}
            {logedin && (
              <Route
                path="/:id"
                element={
                  <Meal
                    logedin={logedin}
                    setLogedin={setLogedin}
                    todos={todos}
                    setTodos={setTodos}
                    dates={dates}
                    setDates={setDates}
                  />
                }
              />
            )}
            {logedin && (
              <Route
                path="/favorites"
                element={
                  <Favorites
                    logedin={logedin}
                    setLogedin={setLogedin}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                }
              />
            )}
            {logedin && (
              <Route
                path="/todo"
                element={
                  <Shoppinglist
                    logedin={logedin}
                    setLogedin={setLogedin}
                    todos={todos}
                    setTodos={setTodos}
                  />
                }
              />
            )}

            <Route
              path="/login"
              element={<Login setUser={setUser} user={user} />}
            />
            <Route path="/about" element={<About />} />
          </>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
