import React from 'react';
import Track from './Track';
import style from '../../../style/Tracks.module.css';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tracks = this.props.state.tracks;
    const tracksCount = tracks.length;

    return (
      <div className={style.tracks_container}>
        <div className={style.inform_about_tracks}>
          <h2 className={style.users_title}>
            Tracks <span className={style.tracks_count}>({tracksCount})</span>
          </h2>
          <span>Sort</span>
        </div>
        <div className={style.table_colum}>
          <div className={style.table_item}>#</div>
          <div className={style.table_item}>Task</div>
          <div className={style.table_item}>Note</div>
          <div className={style.table_item}>Date</div>
          <div className={style.table_item}></div>
        </div>
        <div className={style.tracks}>
          {tracks.map((track, index) => (
            <Track track={track} index={index} key={track.id} />
          ))}
        </div>
        <div className={style.page_numbers}>
          <div className={style.page_number}>1</div>
          <div className={style.page_number}>2</div>
          <div className={style.page_number}>3</div>
          <div className={style.page_number}>4</div>
          <div className={style.page_number}>5</div>
        </div>
      </div>
    );
  }
}

export default Tracks;
