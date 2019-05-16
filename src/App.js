import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Image from './img/header-bg.jpg';

import CreateTodo from "./components/CreateTodo.js";
import EditTodo from "./components/EditTodo.js";
import TodosList from "./components/TodosList.js";

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="header" style={styles.paperContainer}>
          <h1>Process: Project Manager</h1>
        </div>
        <div className="body">
          <h1>Current Project: </h1>
          <CreateTodo />
          <Router>
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;