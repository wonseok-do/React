import React from "react";
import "./style.css";

function Form(props) {
  const { setTitle, setBody, setTodos, title, body, todos } = props;
  return (
    <div className="form">
      <div className="input-group">
        <p>제목</p>
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>내용</p>
        <input
          type="text"
          className="input"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          setTodos([
            ...todos,
            { id: todos.length + 1, title: title, body: body, isDone: false },
          ]);
          setTitle("");
          setBody("");
        }}
      >
        추가하기
      </button>
    </div>
  );
}
export default Form;
