import React from 'react';
import style from '../../style/UserProgress.module.css';
import { getTracks } from '../../js/tracks';
import Tracks from './Tracks/Tracks';

class UserProgress extends React.Component {
  getId() {
    const str = window.location.pathname;
    return str.slice(12, str.length);
  }

  render() {
    alert('dede');
    const id = this.getId();
    const tracks = getTracks(id);

    return (
      <div className={style.main}>
        <Tracks tracks={tracks} />
      </div>
    );
  }
}

export default UserProgress;
