import React from "react";
import List from "../components/list/List";
import "./style.css";

function TodoList(props) {
  const { todos, Remove, Toggle } = props;
  return (
    <div className="list-container">
      <h2>Working..🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return <List Remove={Remove} Toggle={Toggle} todo={todo} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done..!👍</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone !== false) {
            return <List Remove={Remove} Toggle={Toggle} todo={todo} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
export default TodoList;
