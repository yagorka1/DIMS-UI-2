import React from 'react';
import { connect } from 'react-redux';
import { getAllTasks } from '../../../../redux/task-reducer';
import style from '../../../../style/preloader.module.css';

import Tasks from './Tasks';
import { Spinner } from 'react-bootstrap';

class TasksContainer extends React.Component {
  componentDidMount() {
    this.props.getAllTasks();
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
          <Tasks tasks={this.props.tasks} role={this.props.role} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    loadingInProgress: state.tasks.loadingInProgress,
  };
};

export default connect(
  mapStateToProps,
  { getAllTasks },
)(TasksContainer);
