import React from 'react';
import style from '../style/Navbar.module.css';
import statistics from '../assets/images/navbar/statistics.png';
import workflow from '../assets/images/navbar/workflow.png';
import calendar from '../assets/images/navbar/calendar.png';
import users from '../assets/images/navbar/users.png';
import settings from '../assets/images/navbar/settings.png';
import home from '../assets/images/navbar/home.png';
import NavbarItem from './NavbarItem';
import logo from '../assets/images/navbar/logo.png';

class NavBar extends React.Component {
  render() {
    return (
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} className={style.logoImg} alt='Site logo'></img>
          <h1>Mercury</h1>
        </div>
        <NavbarItem image={home} title='Home' />
        <NavbarItem image={workflow} title='Workflow' />
        <NavbarItem image={statistics} title='Statistics' />
        <NavbarItem image={calendar} title='Calendar' />
        <NavbarItem image={users} title='Users' />
        <NavbarItem image={settings} title='Settings' />
      </nav>
    );
  }
}

export default NavBar;
