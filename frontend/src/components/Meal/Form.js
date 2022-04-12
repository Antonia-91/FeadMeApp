import React, { useState } from "react";

const Form = ({ logedin, todos, setTodos }) => {
  const [string, setString] = useState("");
  let splitString = [];

  /// on submit form
  const onsubmit = async (e) => {
    e.preventDefault();
    // where there is a linebrake , split string
    splitString = string.split("\n"); // or (",")

    let arrayToServer = [];
    let newSubArray = [];
    // for each string in splitstrinArray, add user Id,
    for (let i = 0; i < splitString.length; i++) {
      newSubArray = [splitString[i], logedin.user_id];
      arrayToServer[arrayToServer.length] = newSubArray;
    }
    console.log(arrayToServer);
    // then send the Array to backend
    await fetchShoppinglist(arrayToServer);
    // empty the texarea
    setString("");
  };

  /// post shoppinglist   addToShopingList    https://feadmeapp-examen-project.herokuapp.com/addMultiTodos
  // http://localhost:5005/addMultiTodos
  const fetchShoppinglist = async (arrayToServer) => {
    const res = await fetch(
      "https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/addMultiTodos",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(arrayToServer),
      }
    );
    const data = await res.json();

    console.log(data);
    console.log(arrayToServer.length);
    /// update frontend todo sate, foreach new todo (arraytoserver.length) 
    if (data.message === "ok") {
      for (let i = 0; i < arrayToServer.length; i++) {
        let updateTodo = {
          todoList_id: data.result.insertId + i,
          todoList_reminder: 0,
          todoList_title: splitString[i],
          user_id: logedin.user_id,
        };
        setTodos((presState) => [...presState, updateTodo]);
      }
    }
  };

  console.log(todos);

  return (
    <div className="form">
      <form onSubmit={onsubmit}>
        <textarea
          type="text"
          placeholder="shoppinglist..."
          value={string}
          onChange={(e) => setString(e.target.value)}
        ></textarea>

        <button className="add-btn" type="submit">
          Add{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
