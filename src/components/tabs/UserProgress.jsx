import React from 'react';
import style from '../../style/user-progress.module.css';
import { getTracks } from '../../js/tracks';
import Tracks from './Tracks/Tracks';

class UserProgress extends React.Component {
  render() {
    const id = this.props.match.params.userId;
    const tracks = getTracks(id);

    return (
      <div className={style.main}>
        <Tracks tracks={tracks} />
      </div>
    );
  }
}

export default UserProgress;
