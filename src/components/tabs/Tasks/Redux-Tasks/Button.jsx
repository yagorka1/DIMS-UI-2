import React from 'react';
import styleButton from '../../../../style/button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changePost = this.changePost.bind(this);
  }
  getTitle(title) {
    let newTitle = '';
    switch (title) {
      case 'edit':
        newTitle = 'showChangeTaskField';
        break;
      case 'color':
        newTitle = 'chooseColorField';
        break;
      default:
        newTitle = 'title';
    }

    return newTitle;
  }

  changePost() {
    const title = this.getTitle(this.props.title);
    this.props.changePost(this.props.id, title);
  }

  render() {
    return (
      <button className={styleButton.button} onClick={this.changePost}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
