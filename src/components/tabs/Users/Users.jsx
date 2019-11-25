import React from 'react';
import style from '../../../style/Users.module.css';
import User from './User';
import Popup from 'reactjs-popup';
import PopUp from './PopUp';

class Users extends React.Component {
  render() {
    console.log('his.props');
    console.log(this.props);
    const users = this.props.state.users;
    const usersCount = users.length;
    return (
      <div className={style.users_container}>
        {this.props.direction === 'Admin' ? (
          <Popup modal trigger={<button>Add user</button>}>
            {(close) => (
              <PopUp
                close={close}
                state={this.props.state}
                handleInputChange={this.props.handleInputChange}
                addNewUser={this.props.addNewUser}
                dateOfBirth={this.props.dateOfBirth}
                onChangeStartDate={this.props.onChangeStartDate}
                onChangeDirection={this.props.onChangeDirection}
                getCurrentState={this.props.getCurrentState}
              />
            )}
          </Popup>
        ) : (
          <div></div>
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
              changeUser={this.props.changeUser}
              direction={this.props.direction}
            />
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
