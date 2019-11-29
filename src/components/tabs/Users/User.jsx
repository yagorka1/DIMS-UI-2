import React from 'react';
import style from '../../../style/User.module.css';
import style1 from '../../../style/Button.module.css';
import user_photo from '../../../assets/images/main/user.png';
import clock_online from '../../../assets/images/main/clock_online.svg';
import clock_offline from '../../../assets/images/main/clock_offline.svg';

import { NavLink } from 'react-router-dom';
import Button from './Button';
import { getTime } from '../../../js/getDate';
import { ADMIN } from '../../../js/roles';

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className={style.user}>
        <div className={style.user_full_name}>
          <img src={user_photo} className={style.user_photo} alt='user_photo' />
          <div className={style.name_post}>
            <span className={style.user_name}>{user.name}</span>
            <span className={style.user_direction}>{user.direction}</span>
          </div>
        </div>
        {user.activity ? (
          <div className={style.user_last_activity}>
            <img
              className={style.clock_image}
              src={clock_offline}
              alt='image_clock'
            />
            {getTime(user.activity)}
          </div>
        ) : (
          <div className={style.user_last_activity}>
            <img
              className={style.clock_image}
              src={clock_online}
              alt='image_clock'
            />
            <span className={style.online_status}>Online now!</span>
          </div>
        )}
        <div className={style.user_mail}>{user.email}</div>
        <div className={style.user_phone}>{user.mobilePhone}</div>
        <div className={style.user_btn}>
          <NavLink
            className={style1.button}
            to={`users/trac/` + user.email}
            activeClassName={style.activeNavbarLink}
            onClick={this.handleChange}
          >
            <h4>progress</h4>
          </NavLink>
          <NavLink
            className={style1.button}
            to={`users/task/` + user.email}
            activeClassName={style.activeNavbarLink}
            onClick={this.handleChange}
          >
            <h4>tasks</h4>
          </NavLink>
          {this.props.direction === ADMIN ? (
            <Button
              title='edit'
              changeUser={this.props.changeUser}
              id={user.email}
            />
          ) : (
            <div></div>
          )}
          {this.props.direction === ADMIN ? (
            <Button
              title='delete'
              changeUser={this.props.changeUser}
              id={user.email}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default User;
