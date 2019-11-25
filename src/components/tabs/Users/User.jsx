import React from 'react';
import style from '../../../style/User.module.css';
import style1 from '../../../style/Button.module.css';
import { Route } from 'react-router-dom';

import user_photo from '../../../assets/images/main/user.png';
import clock_online from '../../../assets/images/main/clock_online.svg';
import clock_offline from '../../../assets/images/main/clock_offline.svg';
import menu from '../../../assets/images/main/menu.svg';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Home from '../Home';
import UserProgress from '../UserProgress';

class User extends React.Component {
  getTime(minutes) {
    let str = '';

    if (minutes >= 1140) {
      const days = Math.floor(minutes / 1440);
      str = days + ` days ago`;
    } else if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      str = hours + ` hours ago`;
    } else {
      str = minutes + ` minutes ago`;
    }
    return str;
  }

  render() {
    const user = this.props.user;
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
            {this.getTime(user.activity)}
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
            to={`Users/Track/` + user.email}
            activeClassName={style.activeNavbarLink}
            onClick={this.handleChange}
          >
            <h4>progress</h4>
          </NavLink>
          <NavLink
            className={style1.button}
            to={`Users/Task/` + user.email}
            activeClassName={style.activeNavbarLink}
            onClick={this.handleChange}
          >
            <h4>tasks</h4>
          </NavLink>
          {this.props.direction === 'Admin' ? (
            <Button
              title='edit'
              changeUser={this.props.changeUser}
              id={user.email}
            />
          ) : (
            <div></div>
          )}
          {this.props.direction === 'Admin' ? (
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
