import React, { Component } from 'react';
import PlayListItem from './PlayListItem';
export default class PlayList extends Component {
  'use strict';

  constructor(props){
    super(props);
    this.state = {songs: []}
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log("state", this.state.songs);
      })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  render() {
    let songsArray = this.state.songs;
    let songs = songsArray.map((song) => {
      console.log('render song dammit',song);
      return (
        <PlayListItem song={song}/>
      )
    });
    return (
      <div className="col playList">
        <button onClick={this.fetchData}>Update List</button>
        {songs}
      </div>
    )
  }
}
