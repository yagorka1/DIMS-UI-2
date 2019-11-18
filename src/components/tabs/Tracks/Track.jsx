import React from 'react';
import style from '../../../style/Track.module.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  getDate = (date) => {
    const curr_date = date.getDate();

    const curr_month = date.getMonth() + 1;
    const curr_year = date.getFullYear();
    const curr_hours = date.getHours();
    let curr_minutes = date.getMinutes();

    if (curr_minutes < 10) curr_minutes = '0' + curr_minutes;
    if (curr_hours < 10) curr_minutes = '0' + curr_hours;
    if (curr_month < 10) curr_minutes = '0' + curr_month;

    return `${curr_hours}:${curr_minutes} ${curr_date}-${curr_month}-${curr_year}`;
  };

  render() {
    const track = this.props.track;
    const id = this.props.index + 1;

    const curr_date = track.trackDate.getDate();

    const curr_month = track.trackDate.getMonth() + 1;
    const curr_year = track.trackDate.getFullYear();
    const curr_hours = track.trackDate.getHours();
    const curr_minutes = track.trackDate.getMinutes();

    const date = `${curr_date}-${curr_month}-${curr_year}-${curr_hours}:${curr_minutes}`;

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
          <span className={style.user_name}>
            {this.getDate(track.trackDate)}
          </span>
        </div>
        <div className={style.buttons_container}>empty</div>
        {/* <div className={style.track}>
          taskId:{track.taskId}
          trackId{track.trackId}
          taskName:{track.taskName}
          trackNode:{track.trackNode}
          trackDate:{String(track.trackDate)}
        </div> */}
      </div>
    );
  }
}

export default Track;
