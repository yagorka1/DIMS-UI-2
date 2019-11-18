import React from 'react';
import InputText from '../AddUser/InputText';
import DatePicker from 'react-date-picker';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (name, event) => {
    this.props.handleInputChange(name, event);
  };

  onChangeStartDate = (startDate) => this.props.onChangeStartDate(startDate);
  onChangeDeadlineDate = (deadlineDate) =>
    this.props.onChangeDeadlineDate(deadlineDate);

  addNewTask = () => {
    this.props.addNewTask();
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
          <input type='button' onClick={this.addNewTask} value='Save' />
        </form>
      </div>
    );
  }
}

export default AddTask;
