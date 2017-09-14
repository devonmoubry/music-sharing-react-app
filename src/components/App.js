import React, { Component } from "react";
import NavBar from "./NavBar";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";
import "../styles/App.css";

class App extends Component {
  "use strict";

  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <div className="row">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
