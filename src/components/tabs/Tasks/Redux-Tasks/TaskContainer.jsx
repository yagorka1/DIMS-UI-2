import React from 'react';
import { connect } from 'react-redux';
import {
  deleteTask,
  showEditField,
  changeTask,
  pushEditTask,
  chooseColor,
} from '../../../../redux/task-reducer';
import Task from './Task';
import { changeTrack, pushTrack } from '../../../../redux/track-reducer';

class TaskContainer extends React.Component {
  render() {
    return (
      <>
        <Task
          task={this.props.task}
          role={this.props.role}
          deleteTask={this.props.deleteTask}
          showEditField={this.props.showEditField}
          newTask={this.props.newTask}
          newTrack={this.props.newTrack}
          changeTask={this.props.changeTask}
          changeTrack={this.props.changeTrack}
          pushEditTask={this.props.pushEditTask}
          pushTrack={this.props.pushTrack}
          chooseColor={this.props.chooseColor}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newTask: state.tasks.newTask,
    newTrack: state.tracks.newTrack,
  };
};

export default connect(
  mapStateToProps,
  {
    deleteTask,
    showEditField,
    changeTask,
    pushEditTask,
    chooseColor,
    changeTrack,
    pushTrack,
  },
)(TaskContainer);
