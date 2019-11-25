import React from 'react';
// import style_button from '../../../style/Button.module.css';
import style_button from '../../../style/Button.module.css';

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
      <div
        className={style_button.button}
        role='button'
        onKeyPress={() => {}}
        tabIndex='0'
        onClick={this.changeUser}
      >
        {this.props.title}
      </div>
    );
  }
}

export default Button;
