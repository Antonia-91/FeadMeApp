import React, { useState } from "react";
//import { MyContext } from "../condex";
import { useNavigate } from "react-router-dom";

const Login = ({setUser, user}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const { user, setUser } = useContext(MyContext);

  const navigate = useNavigate();

  const save = async (e) => {
    e.preventDefault();
    let userToLogin = {};
    if (!userName || !password) {
      return alert("please fill out the fields");
    } else {
      userToLogin = {
        userName: userName,
        userPass: password,
      };
    }
    console.log(userToLogin);
    await onLogin(userToLogin);
  };


   /// on login   https://feadmeapp-examen-project.herokuapp.com/login
   // http://localhost:5005/login
  const onLogin = async (userToLogin) => {
    const res = await fetch("https://feadmeapp-examen-project.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userToLogin),
    });
    const data = await res.json();
    console.log(data);

    if (data.result === null) {
      console.log("no success");
    } else {
      setUser(data[0]);

      localStorage.setItem("user", JSON.stringify(data[0]));
      navigate("/");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={save}>
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Loggin </button>
      </form>
    </div>
  );
};

export default Login;
