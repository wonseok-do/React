import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List(props) {
  const { todo, Remove, Toggle } = props;

  return (
    <>
      <div className="todo-container">
        <Todo Remove={Remove} Toggle={Toggle} todo={todo} />
      </div>
    </>
  );
}
export default List;
