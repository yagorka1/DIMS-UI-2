import React from 'react';
import style from '../../../style/PopUp.module.css';
import InputText from '../../InputText';
import DatePicker from 'react-date-picker';

class PopUp extends React.Component {
  handleInputChange = (name, event) => {
    this.props.handleInputChange(name, event);
  };

  onChangeStartDate = (startDate) => this.props.onChangeStartDate(startDate);
  onChangeDeadlineDate = (deadlineDate) =>
    this.props.onChangeDeadlineDate(deadlineDate);

  addNewTask = () => {
    this.props.close();
    this.props.addNewTask();
  };

  render() {
    const { close } = this.props;
    return (
      <div className={style.modal}>
        <a className={style.close} onClick={close}>
          &times;
        </a>
        <div className={style.header}> Modal Title </div>
        <form className='{style.content}'>
          <InputText
            label={'Name'}
            value={this.props.state.newTask}
            handleInputChange={this.handleInputChange}
            type='text'
            name='newTask'
          />
          <InputText
            label={'Name'}
            value={this.props.state.newDescription}
            handleInputChange={this.handleInputChange}
            type='text'
            name='newDescription'
          />
          Start Date:
          <DatePicker
            onChange={this.onChangeStartDate}
            value={this.props.state.startDate}
          />
          Deadline Date:
          <DatePicker
            onChange={this.onChangeDeadlineDate}
            value={this.props.state.deadlineDate}
          />
          <input type='button' onClick={this.addNewTask} value='Save' />
        </form>
      </div>
    );
  }
}

export default PopUp;
