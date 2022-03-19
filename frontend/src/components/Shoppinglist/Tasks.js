import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ todos, setTodos, reminder }) => {
  //// Fetch one todo
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:5005/todo/${id}`);
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

    const res = await fetch(`http://localhost:5005/todo/${id}`, {
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
    await fetch(`http://localhost:5005/todo/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.todoList_id != id));
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
            <h3>{todo.todoList_title}</h3>
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
