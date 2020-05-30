import React from 'react';
import style from '../../../style/Track.module.css';

import { getDate } from '../../../js/getDate';
import Button from './Button';

class Track extends React.Component {
  render() {
    const { track } = this.props;
    const id = this.props.index + 1;

    return (
      <div className={style.track}>
        <div className={style.id_container}>{id}</div>
        <div className={style.task_container}>
          <span className={style.task_name}>{track.taskName}</span>
        </div>
        <div className={style.node_container}>
          <span className={style.user_name}>{track.trackNode}</span>
        </div>
        <div className={style.date_container}>
          <span className={style.user_name}>{getDate(track.trackDate)}</span>
        </div>
        <div className={style.time_container}>
          <span className={style.user_name}>{track.timeOnTrack}</span>
        </div>
        <div className={style.buttons_container}>
          <Button
            title='edit'
            changeTrack={this.props.changeTrack}
            id={track.trackId}
          />
          <Button
            title='delete'
            changeTrack={this.props.changeTrack}
            id={track.trackId}
          />
        </div>
      </div>
    );
  }
}

export default Track;
