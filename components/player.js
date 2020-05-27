import React, { Component } from "react";
import Plyr from "plyr";

class Player extends Component {
  // instantiate player
  componentDidMount() {
    this.player = new Plyr(this.videoNode);
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
          crossOrigin="anonymous"
          ref={(node) => (this.videoNode = node)}
        >
          <source type="video/mp4" src={this.props.source} />
          <track
            default={true}
            src={this.props.subtitle}
            kind="captions"
            srcLang="th"
            label="Thai"
            crossOrigin="anonymous"
          />
        </video>
      </div>
    );
  }
}

export default Player;
