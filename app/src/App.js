import React, { Component } from "react";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      todoValue: "",
      todos: [
        {
          text: "Be kind.",
          id: 0
        },
        {
          text: "Be awesome.",
          id: 1
        }
      ]
    };
  }

  addTodo = val => {
    const todo = { text: val, id: this.state.id++ };
    this.setState({ todos: [...this.state.todos, todo], todoValue: "" });
  };

  handleRemove = id => {
    const remainingTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: remainingTodos });
  };

  handleInputChange = event => {
    this.setState({
      todoValue: event.target.value
    });
  };

  render() {
    const { todos, todoValue } = this.state;

    return (
      <div className="app">
        <Header className="green" count={todos.length} />
        <TodoForm
          addTodo={this.addTodo}
          todoValue={todoValue}
          onChange={this.handleInputChange}
        />
        <TodoList todos={todos} remove={this.handleRemove} />
        <Footer />
      </div>
    );
  }
}

export default App;
