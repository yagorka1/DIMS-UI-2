import React from 'react';
import style from '../style/Navbar.module.css';

import NavbarItem from './NavbarItem';
import logo from '../assets/images/navbar/logo.png';
import {
  routes,
  routesAdmin,
  routesMentor,
  routesMember,
} from '../js/routes_names';

class NavBar extends React.Component {
  render() {
    let routes = '';
    if (this.props.direction === 'Admin') routes = routesAdmin;
    if (this.props.direction === 'Mentor') routes = routesMentor;
    if (this.props.direction === 'Member') routes = routesMember;

    return (
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} className={style.logoImg} alt='Site logo'></img>
          <h1>Mercury</h1>
        </div>
        {routes.map((route) => (
          <NavbarItem
            image={route.image}
            showNavbar={this.props.showNavbar}
            title={route.title}
          />
        ))}
      </nav>
    );
  }
}

export default NavBar;
