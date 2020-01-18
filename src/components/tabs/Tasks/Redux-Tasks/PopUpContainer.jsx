import React from 'react';
import { connect } from 'react-redux';
import {
  // onChangeDeadlineDate,
  // onChangeStartDate,
  addNewTask,
  changeTask,
} from '../../../../redux/task-reducer';
import PopUp from './PopUp';

class PopUpContainer extends React.Component {
  render() {
    return (
      <>
        <PopUp
          close={this.props.close}
          state={this.props.state}
          onChange={this.props.changeTask}
          addNewTask={this.props.addNewTask}
          // onChangeStartDate={this.props.onChangeStartDate}
          // onChangeDeadlineDate={this.props.onChangeDeadlineDate}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.tasks,
  };
};

export default connect(
  mapStateToProps,
  { changeTask, addNewTask },
)(PopUpContainer);
