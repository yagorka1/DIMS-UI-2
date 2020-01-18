import React from 'react';
import { connect } from 'react-redux';
import { getAllTasks } from '../../../../redux/task-reducer';
import style from '../../../../style/preloader.module.css';

import Tasks from './Tasks';
import { Spinner } from 'react-bootstrap';
import { getAllTracks } from '../../../../redux/track-reducer';

class TasksContainer extends React.Component {
  componentDidMount() {
    this.props.getAllTasks();
    this.props.getAllTracks();
  }

  render() {
    return (
      <>
        {this.props.loadingInProgress ? (
          <div className={style.blockAnimation}>
            <Spinner
              animation='border'
              variant='info'
              className={style.twist}
            />
          </div>
        ) : (
          <Tasks
            tasks={this.props.tasks}
            role={this.props.role}
            email={this.props.email}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    tracks: state.tracks.tracks,
    loadingInProgress: state.tasks.loadingInProgress,
  };
};

export default connect(
  mapStateToProps,
  { getAllTasks, getAllTracks },
)(TasksContainer);
