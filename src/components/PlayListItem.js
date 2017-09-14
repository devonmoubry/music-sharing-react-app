import React, { Component } from "react";
export default class PlayListItem extends Component {
  "use strict";

  render() {
    return (
      <div key={this.props.song.songTitle} className="card playListItem">
        <ul className="card-block">
          <li className="card-text">
            User: {this.props.song.userName}
          </li>
          <li className="card-text">
            Artist/Band: {this.props.song.songArtist}
          </li>
          <li className="card-text">
            Title: {this.props.song.songTitle}
          </li>
          <li className="card-text">
            Notes: {this.props.song.songNote}
          </li>
        </ul>
      </div>
    );
  }
}
