import React from 'react';
import styleButton from '../../../style/button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser() {
    this.props.changeUser(this.props.id, this.props.title);
  }

  render() {
    return (
      <button className={styleButton.button} onClick={this.changeUser}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
