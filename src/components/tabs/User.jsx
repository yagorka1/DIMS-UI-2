import React from 'react';
import style from '../../style/User.module.css';
import user_photo from '../../assets/images/main/user.png';
import clock_online from '../../assets/images/main/clock_online.svg';
import clock_offline from '../../assets/images/main/clock_offline.svg';
import menu from '../../assets/images/main/menu.svg';

class User extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
        <div className={style.user_mail}>{user.mail}</div>
        <div className={style.user_phone}>{user.phone}</div>
        <div className={style.user_btn}>
          <div
            role='button'
            onClick={this.handleChange}
            onKeyPress={() => {}}
            tabIndex='0'
          >
            <img src={menu} className={style.menu_image} alt='menu' />
          </div>
        </div>
      </div>
    );
  }
}

export default User;
