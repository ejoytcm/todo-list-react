import React from "react";
import { todos } from "./componets/sampleData/todoList";
import TodoList from "./componets/TodoLists/TodoList";

class App  extends React.Component {

  state = {
    todos: [...todos]
  }

  updateTodoHandler = (todoId) => {
    const updatedTodos = [...this.state.todos];
    const todoListIndex = updatedTodos.findIndex(todo => todo.id === todoId);
    const updatedTodo = {...updatedTodos[todoListIndex]};
    let updatedTodoStatus = updatedTodo.status;
    let updatedTodoCssClass = updatedTodo.cssClass;
    if(updatedTodoStatus === "overdue" || updatedTodoStatus === "upcoming") {
      updatedTodoStatus = "inprogress";
      updatedTodoCssClass = "alert-primary";
    } else if(updatedTodoStatus === "inprogress") {
      updatedTodoStatus = "completed";
      updatedTodoCssClass = "alert-success";
    }
    updatedTodo.status = updatedTodoStatus;
    updatedTodo.cssClass = updatedTodoCssClass;
    updatedTodos[todoListIndex] = updatedTodo;
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className="container mt-5">
        <h5 className="text-center mb-5">Todo Lists</h5>
        <TodoList 
          todos={this.state.todos}
          updateTodo={(todoId) => this.updateTodoHandler(todoId)}/>
      </div>
    );
  }
  
}

export default App;
