import React from 'react';
import Track from './Track';
import style from '../../../style/Tracks.module.css';
import {
  setDataInStorage,
  deleteDataFromStorage,
} from '../../../js/setDataInStorage';
import getId from '../../../js/getId';
import { getTracks } from '../../../js/tracks';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrack: '',
      newTrackName: '',
      timeOnTrack: '',
    };

    this.changeTrack = this.changeTrack.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const tracks = getTracks(props.email);
    return { tracks };
  }

  addNewTrack = (projectId, projectTitle) => {
    const { newTrack, timeOnTrack } = this.state;
    const track = {
      taskId: projectId,
      userId: this.props.email,
      trackId: getId(),
      taskName: projectTitle,
      trackNode: newTrack,
      timeOnTrack: timeOnTrack,
      trackDate: new Date(),
    };

    const { tracks } = this.state;
    this.setState({
      tracks: [...tracks, track],
    });
    this.clearInputFields();
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.taskId === projectId) {
          return { ...task, showTrackField: false };
        }
        return task;
      }),
    });

    setDataInStorage(track, 'trac');
  };

  deleteTrack(id) {
    const { tracks } = this.state;
    this.setState({ tracks: tracks.filter((track) => track.trackId !== id) });
    deleteDataFromStorage(id, 'trackId');
  }

  changeTrack(id, action) {
    switch (action) {
      case 'delete': {
        this.deleteTrack(id);
        break;
      }
      case 'edit': {
        alert('edit');
        break;
      }
      default:
        console.log(id);
    }
  }
  render() {
    let tracks = this.state.tracks;

    if (this.props.tracks === undefined) {
      tracks = this.state.tracks;
    } else {
      tracks = this.props.tracks;
    }

    const tracksCount = tracks.length;

    return (
      <div className={style.tracks_container}>
        <div className={style.inform_about_tracks}>
          <h2 className={style.users_title}>
            Tracks <span className={style.tracks_count}>({tracksCount})</span>
          </h2>
        </div>
        <div className={style.table_colum}>
          <div className={style.table_item}>#</div>
          <div className={style.table_item}>Задача</div>
          <div className={style.table_item}>Пометка</div>
          <div className={style.table_item}>Дата</div>
          <div className={style.table_item}>Потраченное время</div>
          <div className={style.table_item}></div>
        </div>
        <div className={style.tracks}>
          {tracks.map((track, index) => (
            <Track
              track={track}
              changeTrack={this.changeTrack}
              index={index}
              key={track.id}
            />
          ))}
        </div>
        {/* <div className={style.page_numbers}> it will be in future versions
          <div className={style.page_number}>1</div>
          <div className={style.page_number}>2</div>
          <div className={style.page_number}>3</div>
          <div className={style.page_number}>4</div>
          <div className={style.page_number}>5</div>
        </div> */}
      </div>
    );
  }
}

export default Tracks;
