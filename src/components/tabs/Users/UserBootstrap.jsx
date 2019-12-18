import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../style/user.module.css';
import styleButton from '../../../style/bootstrap-styles/bootstrap.module.css';
import user_photo from '../../../assets/images/main/user.png';
import clock_online from '../../../assets/images/main/clock_online.svg';
import clock_offline from '../../../assets/images/main/clock_offline.svg';

import { NavLink } from 'react-router-dom';
import ButtonBootstrap from './ButtonBootstrap';
import { Button } from 'react-bootstrap';
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
          <Button variant='primary' className={styleButton.button}>
            <NavLink
              className={styleButton.buttonLink}
              to={`users/trac/` + user.email}
              activeClassName={style.activeNavbarLink}
              onClick={this.handleChange}
            >
              <p className={styleButton.buttonName}>progress</p>
            </NavLink>
          </Button>
          <Button variant='primary' className={styleButton.button}>
            <NavLink
              className={styleButton.buttonLink}
              to={`users/task/` + user.email}
              activeClassName={style.activeNavbarLink}
              onClick={this.handleChange}
            >
              <p className={styleButton.buttonName}>tasks</p>
            </NavLink>
          </Button>

          {this.props.role === ADMIN ? (
            <ButtonBootstrap
              title='edit'
              variant='primary'
              changeUser={this.props.changeUser}
              id={user.email}
            />
          ) : (
            <></>
          )}
          {this.props.role === ADMIN ? (
            <ButtonBootstrap
              title='delete'
              variant='danger'
              changeUser={this.props.changeUser}
              id={user.email}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

User.propTypes = {
  changeUser: PropTypes.func,
  role: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    direction: PropTypes.string,
    activity: PropTypes.number,
    email: PropTypes.string,
    mobilePhone: PropTypes.string,
  }),
};

export default User;
