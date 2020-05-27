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
          src={this.props.source}
        >
          <track
            default
            src={this.props.subtitle}
            kind="subtitles"
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
