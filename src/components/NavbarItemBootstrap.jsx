import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import style from '../style/bootstrap-styles/bootstrap.module.css';
import { getTitle } from '../js/routes_names';
import { Nav } from 'react-bootstrap';

class NavbarItem extends React.Component {
  render() {
    return (
      <LinkContainer to={this.props.title}>
        <Nav.Link className={style.link}>
          <img
            src={this.props.image}
            className={style.image_navbar_item}
            alt={this.props.title}
          />
          <h4>{getTitle(this.props.title)}</h4>
        </Nav.Link>
      </LinkContainer>
    );
  }
}

export default NavbarItem;
