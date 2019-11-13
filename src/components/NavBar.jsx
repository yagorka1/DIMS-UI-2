import React from 'react';
import style from '../style/Navbar.module.css';

import NavbarItem from './NavbarItem';
import logo from '../assets/images/navbar/logo.png';
import routes from '../js/routes_names';

class NavBar extends React.Component {
  render() {
    return (
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} className={style.logoImg} alt='Site logo'></img>
          <h1>Mercury</h1>
        </div>
        {routes.map((route) => (
          <NavbarItem image={route.image} title={route.title} />
        ))}
      </nav>
    );
  }
}

export default NavBar;
