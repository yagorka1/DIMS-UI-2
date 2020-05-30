import React from 'react';
import style from '../../../style/pop-up.module.css';
import InputText from '../../InputText';
import DatePicker from 'react-date-picker';
import { getUsers, getMembers } from '../../../js/users';
import TimeField from 'react-simple-timefield';

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedUsers: [],
    };
  }
  componentDidMount() {
    const users = getUsers();
    this.setState({ users });
  }

  handleInputChange = (name, event) => {
    this.props.onChange(name, event.target.value);
  };

  handleInputChangeTime = (name, event) => {
    this.props.onChange(name, event);
  };

  onChangeStartDate = (startDate) => this.props.onChangeStartDate(startDate);
  onTimeChange = (time) => this.props.onChangeTaskTime(time);
  onChangeDeadlineDate = (deadlineDate) =>
    this.props.onChangeDeadlineDate(deadlineDate);

  addNewTask = () => {
    this.props.close();
    if (this.state.checkedUsers.length === 0) {
      this.props.addNewTask([this.props.email]);
    } else {
      this.props.addNewTask(this.state.checkedUsers);
    }
  };

  addUser = (email, event) => {
    const { checkedUsers } = this.state;
    if (event.target.checked) {
      this.setState({
        checkedUsers: [...checkedUsers, email],
      });
    } else {
      this.setState({
        checkedUsers: checkedUsers.filter((user) => user !== email),
      });
    }
  };

  render() {
    const { close } = this.props;
    const members = getMembers();
    return (
      <div className={style.modal}>
        <a className={style.close} onClick={close}>
          &times;
        </a>
        <div className={style.header}> Add new task </div>
        <form className={style.content}>
          <InputText
            label='Name'
            value={this.props.state.newTask}
            handleInputChange={this.props.onChange}
            type='text'
            name='newTask'
          />
          <InputText
            label='Name'
            value={this.props.state.newDescription}
            handleInputChange={this.props.onChange}
            type='text'
            name='newDescription'
          />
          {/*<InputText*/}
          {/*  label='Time on task'*/}
          {/*  value={this.props.state.newTime}*/}
          {/*  handleInputChange={this.props.onChange}*/}
          {/*  type='text'*/}
          {/*  name='newTime'*/}
          {/*/>*/}
          <label htmlFor='time'>Время: </label>
          <TimeField
            value={this.props.state.newTime}
            onChange={(event, value) =>
              this.handleInputChangeTime('newTime', value)
            }
          />
          {/*<TimeField value={this.props.state.newTime} onChange={this.onTimeChange} />*/}
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
          {this.props.role !== 'Member' && (
            <div>
              Users:
              {members.map((user) => (
                <div>
                  <input
                    type='checkbox'
                    name='users'
                    onClick={(event) => {
                      this.addUser(user.email, event);
                    }}
                  />
                  {user.name} ({user.email})
                </div>
              ))}
            </div>
          )}
          <input type='button' onClick={this.addNewTask} value='Save' />
        </form>
      </div>
    );
  }
}

export default PopUp;
