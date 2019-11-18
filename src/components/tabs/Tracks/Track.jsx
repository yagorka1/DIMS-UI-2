import React from 'react';
import style from '../../../style/Track.module.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const track = this.props.track;
    return (
      <div className={style.track}>
        taskId:{track.taskId}
        trackId{track.trackId}
        taskName:{track.taskName}
        trackNode:{track.trackNode}
        trackDate:{String(track.trackDate)}
      </div>
    );
  }
}

export default Track;
