import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/CreateTodo.js";
import EditTodo from "./components/EditTodo.js";
import TodosList from "./components/TodosList.js";

class App extends Component {
  render() {
    return (
      <div>
        <CreateTodo />
        <Router>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </Router>
      </div>
    );
  }
}

export default App;