import React, { Component } from "react";
import logo from "../logo.svg";

export default class NavBar extends Component {
  "user strict";
  render() {
    return (
      <div className="row navBar App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-3">Play What?!</h1>
      </div>
    );
  }
}
