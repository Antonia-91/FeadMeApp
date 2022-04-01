import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ todos, setTodos, reminder }) => {
  //// Fetch one todo   https://feadmeapp-examen-project.herokuapp.com/todo/${id}
  // http://localhost:5005/todo/${id}
  const fetchTodo = async (id) => {
    const res = await fetch(` https://feadmeapp-examen-project.herokuapp.com/todo/${id}`);
    const data = await res.json();
    //console.log(data);
    return data;
  };

  const onDoubbleClick = async (id) => {
    const todoToToggle = await fetchTodo(id);
    console.log(todoToToggle);
    const updateTask = {
      ...todoToToggle,
      todoList_reminder: !todoToToggle.todoList_reminder,
    };
    console.log(updateTask);

    const res = await fetch(` https://feadmeapp-examen-project.herokuapp.com/todo/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();
    console.log(data);
    setTodos(
      todos.map((todo) =>
        todo.todoList_id === id
          ? { ...todo, todoList_reminder: !todo.todoList_reminder }
          : todo
      )
    );
  };
  //// on delete
  const onDelete = async (id) => {
    console.log(id);

    await fetch(`https://feadmeapp-examen-project.herokuapp.com/todo/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.todoList_id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          className="todo-content"
          key={todo.todoList_id}
          onDoubleClick={() => onDoubbleClick(todo.todoList_id)}
        >
          <div
            className={` ${
              todo.todoList_reminder ? "reminder todo-info" : "todo-info"
            }`}
          >
            <p>{todo.todoList_title}</p>
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(todo.todoList_id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
