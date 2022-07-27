import React from "react";
import "./style.css";

function Todo(props) {
  const { todo, Remove, Toggle } = props;
  return (
    <div className="todo-card">
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <div className="btn-group">
        <button className="del-btn" onClick={() => Remove(todo.id)}>
          삭제하기
        </button>

        <button className="com-btn" onClick={() => Toggle(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
export default Todo;
