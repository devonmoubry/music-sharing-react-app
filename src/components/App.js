import React, {Component} from 'react';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  'use strict';
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="row">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
