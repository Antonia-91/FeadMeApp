import React, { useState, useCallback, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DatePick from "./components/DatePick/DatePick";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Meal from "./components/Meal/Meal";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Shoppinglist from "./components/Shoppinglist/Shoppinglist";

import "./css/App.css";
import bubble from "./backgroundImg/bubbla.png";
//import webImg from "./src/backgroundImg/Web 1920 – 2";
//import webImg from "../src/backgroundImg/web.jpg";

function App() {
  const [user, setUser] = useState();
  const [logedin, setLogedin] = useState();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    //console.log(getUser);
    setLogedin(getUser);
  }, [user]);

  return (
    <div className="App">
      <Router>
        <Navbar logedin={logedin} setLogedin={setLogedin} />
        <Routes>
          <>
            {logedin && (
              <Route exact path="/" element={<Home logedin={logedin} />} />
            )}
            {logedin && (
              <Route
                path="/seach"
                element={<Search logedin={logedin} setLogedin={setLogedin} />}
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
                  />
                }
              />
            )}
            {logedin && (
              <Route
                path="/favorites"
                element={
                  <Favorites logedin={logedin} setLogedin={setLogedin} />
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
          </>
        </Routes>
      </Router>
      <div className="bubbles">
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
      </div>
    </div>
  );
}

export default App;
