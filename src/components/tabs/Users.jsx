import React from 'react';
import style from '../../style/Users.module.css';
import User from './User';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.users = [
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
    ];
  }

  render() {
    const users = this.users;
    const usersCount = users.length;
    return (
      <div className={style.users_container}>
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
