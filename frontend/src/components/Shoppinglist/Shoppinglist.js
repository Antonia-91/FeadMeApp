import React, { useState, useEffect } from "react";
import Tasks from "./Tasks";

const Shoppinglist = ({ logedin, setLogedin, todos, setTodos }) => {
  //const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);

  console.log(todos);

  useEffect(() => {
    const getAllTodos = async () => {
      let idToServer = logedin.user_id;
      const todosFromServer = await fetchAllTodos(idToServer);
      //console.log(todosFromServer[0]);
      setTodos(todosFromServer);
    };
    getAllTodos();
  }, [logedin]);

  /// fetch all todos
  //https://feadmeapp-examen-project.herokuapp.com/todos/${id}
  // https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/todos/${id}
  // `http://localhost:5005/todos/${id}`
  const fetchAllTodos = async (id) => {
    const res = await fetch(`https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/todos/${id}`);
    const data = await res.json();
    return data;
  };

  //// add new Todo
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      alert("pleace add a task");
      return;
    }
    const obj = {
      logedin: logedin.user_id,
      text: text,
    };
    await onAdd(obj);
    setText("");
    setReminder(false);
  };

  //// post new todo
  //https://feadmeapp-examen-project.herokuapp.com/addTodo
  // https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/addTodo
  // http://localhost:5005/addTodo
  const onAdd = async (obj) => {
    const res = await fetch("https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/addTodo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === "success") {
      let newTodo = {
        todoList_id: data.insertId,
        todoList_reminder: 0,
        todoList_title: obj.text,
        user_id: logedin.user_id,
      };
      //console.log(newTodo);
      setTodos((prevState) => [...prevState, newTodo]);
    }
  };

  //// Delete new todo

  return (
    <main className="shoppinglist-main">
      <h2>My shoppinglist</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Add a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <label> Set Reminder </label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="add-form-btn">
          <button type="submit"> Add </button>
        </div>
      </form>
      <Tasks todos={todos} setTodos={setTodos} reminder={reminder} />
    </main>
  );
};

export default Shoppinglist;
