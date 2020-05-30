import React from 'react';
import style from '../style/Navbar.module.css';

import NavbarItem from './NavbarItem';
import logo from '../assets/images/navbar/logo.png';
import { getRotes } from '../js/routes_names';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
    };
  }

  showNavbar = () => {
    this.setState({ showNavbar: !this.state.showNavbar });
  };

  render() {
    let routes = getRotes(this.props.role);

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
