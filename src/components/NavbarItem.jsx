import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style/Navbar.module.css';

class NavbarItem extends React.Component {
  handleChange = () => {
    // this.props.showNavbar();
  };

  render() {
    return (
      <div className={style.navbarItem}>
        <NavLink
          className={style.navbarLink}
          to={this.props.title}
          activeClassName={style.activeNavbarLink}
          onClick={this.handleChange}
        >
          <img
            src={this.props.image}
            className={style.image_navbar_item}
            alt={this.props.title}
          />
          <h4>{this.props.title}</h4>
        </NavLink>
      </div>
    );
  }
}

export default NavbarItem;
