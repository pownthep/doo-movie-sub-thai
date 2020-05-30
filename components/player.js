import React, { Component } from "react";
import Plyr from "../public/js/plyr.min.js";

class Player extends Component {
  // instantiate player
  changeSource(newSource) {
    this.source.sources[0].src = newSource;
  }
  componentDidMount() {
    this.player = new Plyr(this.videoNode, {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen'],
      settings: ['quality'],
      quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240,] }
    });
    this.player.source = {
      type: "video",
      quality: 1080,
      sources: [
        {
          src: this.props.source,
          type: "video/mp4",
          label: 'ipfs.io',
          size: 1080
        },
        {
          src: this.props.source.replace("ipfs.io", "dweb.link"),
          type: "video/mp4",
          label: 'dweb.link',
          size: 720
        },
        {
          src: this.props.source.replace("ipfs.io", "gateway.ipfs.io"),
          type: "video/mp4",
          label: 'gateway.ipfs.io',
          size: 576
        },
        {
          src: this.props.source.replace("ipfs.io", "10.via0.com"),
          type: "video/mp4",
          label: '10.via0.com',
          size: 480
        },
        {
          src: this.props.source.replace("ipfs.io", "ninetailed.ninja"),
          type: "video/mp4",
          label: 'ninetailed.ninja',
          size: 360
        },
        {
          src: this.props.source.replace(
            "https://ipfs.io",
            "http://localhost:8080"
          ),
          type: "video/mp4",
          label: 'localhost',
          size: 240
        },
      ],
      poster: this.props.poster,
      tracks: [
        {
          kind: "subtitles",
          label: "Thai",
          srclang: "th",
          src: this.props.subtitle,
          default: true,
        },
      ],
    };
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  render() {
    return (
      <div>
        <video
          preload="auto"
          crossOrigin="anonymous"
          className="movie"
          ref={(video) => (this.videoNode = video)}
        ></video>
      </div>
    );
  }
}

export default Player;
