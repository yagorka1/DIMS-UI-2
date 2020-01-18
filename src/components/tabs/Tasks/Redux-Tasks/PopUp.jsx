import React from 'react';
import style from '../../../../style/pop-up.module.css';
import button_style from '../../../../style/button.module.css';
import InputText from '../../../InputText';
import DatePicker from 'react-date-picker';
import { getUsers, getMembers } from '../../../../js/users';

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

  handleInputChange = (name, event) => {
    this.props.onChange(name, event.target.value);
  };

  onChangeStartDate = (startDate) =>
    this.props.onChange('startDate', startDate);
  onChangeDeadlineDate = (deadlineDate) =>
    this.props.onChange('deadlineDate', deadlineDate);

  addNewTask = () => {
    this.props.close();
    this.props.addNewTask(this.state.checkedUsers);
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
            label='Description'
            value={this.props.state.newDescription}
            handleInputChange={this.props.onChange}
            type='text'
            name='newDescription'
          />
          <div className={style.date_wrapper}>
            <span>Start Date:</span>
            <DatePicker
              onChange={this.onChangeStartDate}
              value={this.props.state.startDate}
            />
          </div>
          <div className={style.date_wrapper}>
            <span>Deadline Date:</span>
            <DatePicker
              onChange={this.onChangeDeadlineDate}
              value={this.props.state.deadlineDate}
            />
          </div>
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
          <input
            type='button'
            className={button_style.button}
            onClick={this.addNewTask}
            value='Save'
          />
        </form>
      </div>
    );
  }
}

export default PopUp;
