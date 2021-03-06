import React from 'react';
import styleButton from '../../../style/Button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changePost = this.changePost.bind(this);
  }

  changePost() {
    this.props.changePost(this.props.id, this.props.title);
  }

  render() {
    return (
      <button className={styleButton.button} onClick={this.changePost}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
