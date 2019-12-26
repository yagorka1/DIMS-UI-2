import React from 'react';
import style from '../style/header.module.css';
import menu from '../assets/images/header/menu.png';
import user_photo from '../assets/images/header/user.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.showNavbar();
  }

  render() {
    return (
      <header className={style.header}>
        <div className={style.buttons_header}>
          <button onClick={this.handleChange}>
            <img src={menu} className={style.images_header} alt='Save' />
          </button>
        </div>
        <div className={style.buttons_header}>
          <button onClick={this.props.authUser} className={style.logOut_button}>
            Log Out
          </button>
          <img
            src={user_photo}
            className={style.user_photo}
            alt='notifications'
          />
        </div>
      </header>
    );
  }
}

export default Header;
