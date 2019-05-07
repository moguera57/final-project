import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/CreateTodo.js";
import EditTodo from "./components/EditTodo.js";
import TodosList from "./components/TodosList.js";
import Login from "./components/Login.js";

class App extends Component {
  render() {
    return (
      <div>
        <CreateTodo />
        <Router>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;