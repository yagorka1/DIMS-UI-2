import React from 'react';
import { connect } from 'react-redux';
import {} from '../../../../redux/task-reducer';

import PopUp from './PopUp';

class PopUpContainer extends React.Component {
  render() {
    return (
      <>
        {/* <PopUp
          close={this.props.close}
          state={this.state}
          onChange={this.onChange}
          addNewTask={this.addNewTask}
          onChangeStartDate={this.onChangeStartDate}
          onChangeDeadlineDate={this.onChangeDeadlineDate}
        /> */}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

export default connect(
  mapStateToProps,
  {},
)(PopUpContainer);
