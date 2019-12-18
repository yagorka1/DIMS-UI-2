import React from 'react';
import { Button } from 'react-bootstrap';
import style from '../../../style/bootstrap-styles/bootstrap.module.css';

class ButtonBootstrap extends React.Component {
  constructor(props) {
    super(props);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser() {
    this.props.changeUser(this.props.id, this.props.title);
  }

  render() {
    return (
      <Button
        variant={this.props.variant}
        onClick={this.changeUser}
        className={style.button}
      >
        {this.props.title}
      </Button>
    );
  }
}

export default ButtonBootstrap;
