import React, { Component } from "react";
import Plyr from "plyr";

class Player extends Component {
  // instantiate player
  componentDidMount() {
    this.player = new Plyr(this.videoNode)
    this.player.source = {
      type: 'video',
      sources: [
        {
          src: this.props.source,
          type: 'video/mp4',
          size: 1080,
        },
        {
          src: this.props.source.replace('ipfs.io', 'dweb.link'),
          type: 'video/mp4',
          size: 720,
        },
        {
          src: this.props.source.replace('ipfs.io', 'gateway.ipfs.io'),
          type: 'video/mp4',
          size: 576,
        },
        {
          src: this.props.source.replace('ipfs.io', '10.via0.com'),
          type: 'video/mp4',
          size: 480,
        },
        {
          src: this.props.source.replace('ipfs.io', 'ninetailed.ninja'),
          type: 'video/mp4',
          size: 360,
        },
        {
          src: this.props.source.replace('https://ipfs.io', 'http://localhost:8080'),
          type: 'video/mp4',
          size: 240,
        },
      ],
      poster: this.props.poster,
      tracks: [
        {
          kind: 'captions',
          label: 'Thai',
          srclang: 'th',
          src: this.props.subtitle,
          default: true,
        },
      ]
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  render() {
    return (
      <video preload="auto" crossOrigin="anonymous" className="movie" ref={video => this.videoNode = video}></video>
    );
  }
}

export default Player;
