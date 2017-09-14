import React, { Component } from "react";
export default class PlayListForm extends Component {
  "use strict";
  constructor() {
    super();

    // input fields should initially render as empty
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNote: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ [e.target.id]: e.target.value });
  }

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNote: "",
      songArtist: "",
      songTitle: "",
      songs: []
    });
  };

  render() {
    return (
      <div className="col playListForm">
        <form onSubmit={this.addToList}>
          <div className="form-group row">
            <label htmlFor="name" className="text-white col-5 col-form-label">
              User Name:
            </label>
            <div className="col-8">
              <input
                autoFocus
                type="text"
                className="userName form-control"
                id="userName"
                placeholder="Name or User Name"
                value={this.state.userName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="artist" className="text-white col-5 col-form-label">
              Artist / Band:
            </label>
            <div className="col-8">
              <input
                type="text"
                className="songArtist form-control"
                id="songArtist"
                placeholder="Artist or Band"
                value={this.state.songArtist}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="name" className="text-white col-5 col-form-label">
              Song Title:
            </label>
            <div className="col-8">
              <input
                type="text"
                className="songTitle form-control"
                id="songTitle"
                placeholder="Song Title"
                value={this.state.songTitle}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="name" className="text-white col-5 col-form-label">
              Notes about Song:
            </label>
            <div className="col-8">
              <textarea
                type=""
                className="songNote form-control"
                id="songNote"
                value={this.state.songNote}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
