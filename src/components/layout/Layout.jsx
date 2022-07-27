import React from "react";
import "./style.css";
import { useState } from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import TodoList from "../../pages/TodoList";

function Layout() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  const Remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const Toggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div className="layout">
      <Header />
      <Form
        setTitle={setTitle}
        setBody={setBody}
        setTodos={setTodos}
        title={title}
        body={body}
        todos={todos}
      />
      <TodoList Remove={Remove} Toggle={Toggle} todos={todos} />
    </div>
  );
}
export default Layout;
