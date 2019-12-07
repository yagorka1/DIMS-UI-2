import React from 'react';
import style from '../../../style/users.module.css';
import User from './User';
import Popup from 'reactjs-popup';
import PopUp from './PopUp';
import {
  deleteDataFromStorage,
  setDataInStorage,
} from '../../../js/setDataInStorage';
import { getUsers } from '../../../js/users';
import { ADMIN } from '../../../js/roles';
import { DELETE, EDIT } from '../../../js/actions_names';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      sex: 'Male',
      direction: 'Member',
      date: new Date(),
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

    this.changeUser = this.changeUser.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const users = getUsers();
    return { users };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
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

  deleteUser(id) {
    const { users } = this.state;
    this.setState({ users: users.filter((user) => user.email !== id) });
    deleteDataFromStorage(id, 'email');
  }

  changeUser(id, action) {
    switch (action) {
      case DELETE: {
        this.deleteUser(id);
        break;
      }
      case EDIT: {
        alert('edit');
        break;
      }
      default:
        console.log(id);
    }
  }

  addNewUser = () => {
    const {
      sex,
      direction,
      date,
      startDate,
      name,
      lastName,
      email,
      education,
      age,
      university,
      mathScore,
      address,
      mobilePhone,
      skype,
    } = this.state;
    const newUser = {
      sex,
      direction,
      date,
      startDate,
      name,
      lastName,
      email,
      education,
      age,
      university,
      mathScore,
      address,
      mobilePhone,
      skype,
    };

    const { users } = this.state;
    this.setState({
      users: [...users, newUser],
    });

    setDataInStorage(newUser, 'user');
  };
  render() {
    const { users } = this.state;
    const usersCount = users.length;
    return (
      <div className={style.users_container}>
        {this.props.role === ADMIN ? (
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
        ) : (
          <></>
        )}
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
            <User
              user={user}
              key={user.id}
              changeUser={this.changeUser}
              role={this.props.role}
            />
          ))}
        </div>
        {/* <div className={style.page_numbers}>
          <div className={style.page_number}>1</div> it will be in future versions
          <div className={style.page_number}>2</div>
          <div className={style.page_number}>3</div>
          <div className={style.page_number}>4</div>
          <div className={style.page_number}>5</div>
        </div> */}
      </div>
    );
  }
}

export default Users;
