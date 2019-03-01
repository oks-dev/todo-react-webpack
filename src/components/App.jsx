import React, { Component } from 'react';
import Todos from './Todos.jsx';
import AddTodo from './AddTodo.jsx';

window.id = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: 'first todo'},
        {id: 2, content: 'second todo'}
      ]
    }

    this.addTodo = this.addTodo.bind(this);

  }

  addTodo(todo) {
    const current = {id: window.id++, content: todo}
    let todos = [...this.state.todos, current];
    console.log(todos);
    this.setState({
      todos
    })
  }

  deleteTodo(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="wrap">
        <div className="header">React ToDo App</div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App

