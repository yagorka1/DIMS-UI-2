import React from 'react';
import style_button from '../../../style/Button.module.css';

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
      <div
        className={style_button.button}
        onClick={this.changePost}
        role='button'
        onKeyPress={() => {}}
        tabIndex='0'
      >
        {this.props.title}
      </div>
    );
  }
}

export default Button;
