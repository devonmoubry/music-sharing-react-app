import React, { Component } from 'react';
export default class PlayListItem extends Component {
  'use strict';

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div key={this.props.song.songTitle} className="playListItem" >
        <ul>
          <li>User: {this.props.song.userName}</li>
          <li>Artist/Band: {this.props.song.songArtist}</li>
          <li>Title: {this.props.song.songTitle}</li>
          <li>Notes: {this.props.song.songNote}</li>
        </ul>
      </div>
    )
  }
}
