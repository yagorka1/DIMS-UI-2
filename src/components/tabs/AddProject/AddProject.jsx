import React from 'react';
import InputText from '../AddUser/InputText';
import DatePicker from 'react-date-picker';

class AddProject extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (name, event) => {
    this.props.handleInputChange(name, event);
  };

  onChangeStartDate = (startDate) => this.props.onChangeStartDate(startDate);
  onChangeDeadlineDate = (deadlineDate) =>
    this.props.onChangeDeadlineDate(deadlineDate);

  addNewProject = () => {
    this.props.addNewProject();
  };

  render() {
    const state = this.props.state;

    return (
      <div className='addTask'>
        <form className='{style.content}'>
          <InputText
            label={'Name'}
            value={state.newTask}
            handleInputChange={this.handleInputChange}
            type='text'
            name='newTask'
          />
          <InputText
            label={'Name'}
            value={state.newDescription}
            handleInputChange={this.handleInputChange}
            type='text'
            name='newDescription'
          />
          Start Date:
          <DatePicker
            onChange={this.onChangeStartDate}
            value={state.startDate}
          />
          Deadline Date:
          <DatePicker
            onChange={this.onChangeDeadlineDate}
            value={state.deadlineDate}
          />
          <input type='button' onClick={this.addNewProject} value='Save' />
        </form>
      </div>
    );
  }
}

export default AddProject;
