import React, { Component } from 'react';

export default class NavBar extends Component {
  render () {
    return (
      <div className="row navBar App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Play What?!</h1>
      </div>
    );
  }
}
