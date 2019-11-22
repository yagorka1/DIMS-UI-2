import React from 'react';
import style from '../../../style/Users.module.css';
import User from './User';
import Popup from 'reactjs-popup';
import PopUp from './PopUp';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: '1',
          name: 'Eger',
          direction: 'Front',
          activity: 34,
          mail: 'frrf@email.com',
          phone: '123456789',
        },
        {
          id: '2',
          name: 'Emeer',
          direction: 'Back',
          activity: 944,
          mail: 'frac@email.com',
          phone: '88888789',
        },
        {
          id: '3',
          name: 'Meyerbeer',
          direction: 'Web Designer',
          activity: 9442,
          mail: 'frere@email.com',
          phone: '12345789',
        },
        {
          id: '4',
          name: 'crc',
          direction: 'Account Manager',
          activity: 0,
          mail: 'frere@email.com',
          phone: '12345789',
        },
      ],
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
    // this.props.close();
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
    const users = this.state.users;
    const usersCount = users.length;
    return (
      <div className={style.users_container}>
        <Popup modal trigger={<button>Add user</button>}>
          {(close) => (
            <PopUp
              close={close}
              state={this.state}
              handleInputChange={this.handleInputChange}
              addNewUser={this.addNewUser}
              dateOfBirth={this.dateOfBirth}
              onChangeStartDate={this.onChangeStartDate}
              onChangeDirection={this.onChangeDirection}
              getCurrentState={this.getCurrentState}
            />
          )}
        </Popup>
        <div className={style.inform_about_users}>
          <h2 className={style.users_title}>
            Users <span className={style.users_count}>({usersCount})</span>
          </h2>
          <span>Sort</span>
        </div>
        <div className={style.table_colum}>
          <div className={style.table_item}>Name</div>
          <div className={style.table_item}>Last activity</div>
          <div className={style.table_item}>Mail</div>
          <div className={style.table_item}>Phone</div>
          <div className={style.table_item}></div>
        </div>
        <div className={style.users}>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
        <div className={style.page_numbers}>
          <div className={style.page_number}>1</div>
          <div className={style.page_number}>2</div>
          <div className={style.page_number}>3</div>
          <div className={style.page_number}>4</div>
          <div className={style.page_number}>5</div>
        </div>
      </div>
    );
  }
}

export default Users;
