import React from 'react';
import YouTube from 'react-youtube';

class youtubeplayer extends React.Component {
  onReady = (event) => {
    event.target.pauseVideo();
  };

  onStateChange = (event) => {
    if (event.data === 1) {
      // Video is playing
      console.log('Video is playing');
    }
  };

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this.onReady}
        onStateChange={this.onStateChange}
      />
    );
  }
}

export default youtubeplayer;