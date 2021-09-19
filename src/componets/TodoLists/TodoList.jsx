import React from "react";

const TodoList = (props) => {
  return (
    <div className="row">
      {props.todos.map((todo) => (
        <div className="col-md-12" key={todo.id}>
          <div
            className={`alert ${todo.cssClass} ${
              todo.status === "completed" ? "cursor-default" : "cursor-pointer"
            }`}
            role="alert"
            onClick={() => props.updateTodo(todo.id)}
          >
            {todo.description} ({todo.status})
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
