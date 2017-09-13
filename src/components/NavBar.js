import React, { Component } from 'react';
import logo from '../logo.svg';

export default class NavBar extends Component {
  render () {
    return (
      <div className="row navBar App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2 className="display-2">Play What?!</h2>
      </div>
    );
  }
}
