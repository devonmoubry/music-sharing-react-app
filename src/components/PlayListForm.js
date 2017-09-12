import React, { Component } from 'react';
export default class PlayListForm extends Component {
  'use strict';
  constructor(){
    super();

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNote: ''
    }
  }

  handleUserNameChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({userName: e.target.value});
  }

  handleSongArtistChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({songArtist: e.target.value});
  }

  handleSongTitleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({songTitle: e.target.value});
  }

  handleSongNoteChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({songNote: e.target.value});
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");
    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNote: '', songArtist: '', songTitle: '', songs: []});
  }

  render() {
    return (
      <div className="col playListForm">
        <form onSubmit={this.addToList}>
          <ul>
            <li>
              <label htmlFor="name">User Name:</label><br/>
              <input autoFocus type="text" className="userName" id="userName" placeholder="Name or User Name" value={this.state.userName} onChange={this.handleUserNameChange}/></li>
            <li>
              <label htmlFor="artist">Artist / Band:</label><br/>
              <input type="text" className="songArtist" id="songArtist" placeholder="Artist or Band" value={this.state.songArtist} onChange={this.handleSongArtistChange}/></li>
            <li>
              <label htmlFor="name">Song Title:</label><br/>
              <input type="text" className="songTitle" id="songTitle" placeholder="Song Title" value={this.state.songTitle} onChange={this.handleSongTitleChange}/></li>
            <li>
              <label htmlFor="name">Notes about Song:</label><br/>
              <textarea type="" className="songNote" id="songNote" value={this.state.songNote} onChange={this.handleSongNoteChange}/></li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }

}
