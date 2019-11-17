import React from 'react';
import style from '../../../style/Post.module.css';

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
      <div className={style.button} onClick={this.changePost}>
        {this.props.title}
      </div>
    );
  }
}

export default Button;
