import React from 'react';
import style from '../style/Header.module.css';
import menu from '../assets/images/header/menu.png';
import search from '../assets/images/header/search.png';
import messages from '../assets/images/header/messages.png';
import notifications from '../assets/images/header/notifications.png';
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
          <div
            role='button'
            onClick={this.handleChange}
            onKeyPress={() => {}}
            tabIndex='0'
          >
            <img src={menu} className={style.images_header} alt='Save' />
          </div>
          {/* <img src={search} className={style.images_header} alt='search' /> */}{' '}
          {/*not yet implemented*/}
        </div>
        <div className={style.buttons_header}>
          {/* <div className={style.button}>+ Add Task</div>
          <img src={messages} className={style.images_header} alt='messages' />
          <img
            src={notifications}
            className={style.images_header}
            alt='notifications'
          /> */}
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
