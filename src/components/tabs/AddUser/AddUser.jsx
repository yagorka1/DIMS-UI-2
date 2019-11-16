import React from 'react';
import DatePicker from 'react-date-picker';
import namesOfInput from '../../../js/input_text';

import style from '../../../style/AddUser.module.css';
import InputText from './InputText';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sex: 'Male',
      direction: 'User',
      date: new Date(),
      startDate: new Date(),
      name: '',
      lastName: '',
      email: '',
      education: '',
      age: '',
      university: '',
      mathScore: '',
      address: '',
      mobilePhone: '',
      skype: '',
    };
  }

  handleInputChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // createNewPost = (title, task, priority) => {
  //   return {
  //     title: title,
  //     task: task,
  //     priority: priority,
  //     date: getDate(),
  //     chooseColorField: false,
  //     backgroundColorPost: BLUE_COLOR,
  //     status: false,
  //     showEditField: false,
  //     showChangeTaskField: false,
  //   };
  // };

  addNewUser = () => {
    const newUser = {
      sex: this.state.sex,
      direction: this.state.direction,
      date: this.state.date,
      startDate: this.state.startDate,
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      education: this.state.education,
      age: this.state.age,
      university: this.state.university,
      mathScore: this.state.mathScore,
      address: this.state.address,
      mobilePhone: this.state.mobilePhone,
      skype: this.state.skype,
    };
    const { users } = this.state;
    this.setState({
      users: [...users, newUser],
    });
    alert('user has been added');
  };

  dateOfBirth = (date) => this.setState({ date });
  onChangeStartDate = (startDate) => this.setState({ startDate });
  onChangeDirection = (event) =>
    this.setState({ direction: event.target.value });
  onChangeSex = (event) => this.setState({ sex: event.target.value });
  getCurrentState = () => {
    return [
      this.state.name,
      this.state.lastName,
      this.state.email,
      this.state.education,
      this.state.age,
      this.state.university,
      this.state.mathScore,
      this.state.address,
      this.state.mobilePhone,
      this.state.skype,
    ];
  };

  render() {
    const state = this.getCurrentState();
    return (
      <div className={style.content}>
        <form className={style.content}>
          {state.map((input, i) => (
            <InputText
              label={namesOfInput[i].label}
              value={input}
              handleInputChange={this.handleInputChange}
              type='text'
              name={namesOfInput[i].name}
            />
          ))}
          <label>
            Direction:
            <select
              value={this.state.direction}
              onBlur={this.handleOnBlur}
              onChange={this.onChangeDirection}
            >
              <option value='User'>User</option>
              <option value='Admin'>Admin</option>
            </select>
          </label>
          <label>
            Sex:
            <select
              value={this.state.sex}
              onBlur={this.handleOnBlur}
              onChange={this.onChangeSex}
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </label>
          Date of Birth:
          <DatePicker onChange={this.dateOfBirth} value={this.state.date} />
          Start Date:
          <DatePicker
            onChange={this.onChangeStartDate}
            value={this.state.startDate}
          />
          <input type='button' onClick={this.addNewUser} value='Save' />
        </form>
      </div>
    );
  }
}

export default AddUser;
