import React from 'react';
import style from '../style/navbar.module.css';

import NavbarItem from './NavbarItemBootstrap';
import logo from '../assets/images/navbar/logo.png';
import { getRotes } from '../js/routes_names';
import { Navbar, Nav } from 'react-bootstrap';

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
      <Navbar bg='dark' variant='dark' className='flex-column'>
        <Navbar.Brand>
          <img src={logo} className={style.logoImg} alt='Site logo'></img>
          <h1>Mercury</h1>
        </Navbar.Brand>
        <Nav variant='pills' className='mr-auto flex-column'>
          {routes.map((route) => (
            <NavbarItem
              className='row-flex'
              image={route.image}
              showNavbar={this.props.showNavbar}
              title={route.title}
            />
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
