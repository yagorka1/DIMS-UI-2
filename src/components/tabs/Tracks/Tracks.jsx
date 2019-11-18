import React from 'react';
import Track from './Track';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tracks = this.props.state.tracks;

    return (
      <div>
        {tracks.map((track) => (
          <Track track={track} />
        ))}
      </div>
    );
  }
}

export default Tracks;
