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
          changeTask={this.props.changeTask}
          pushEditTask={this.props.pushEditTask}
          chooseColor={this.props.chooseColor}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newTask: state.tasks.newTask,
  };
};

export default connect(
  mapStateToProps,
  { deleteTask, showEditField, changeTask, pushEditTask, chooseColor },
)(TaskContainer);
