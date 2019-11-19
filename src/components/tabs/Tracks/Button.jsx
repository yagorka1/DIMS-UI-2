import React from 'react';
// import style_button from '../../../style/Button.module.css';
import style_button from '../../../style/Button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changeTrack = this.changeTrack.bind(this);
  }

  changeTrack() {
    this.props.changeTrack(this.props.id, this.props.title);
  }

  render() {
    return (
      <div
        className={style_button.button}
        role='button'
        onKeyPress={() => {}}
        tabIndex='0'
        onClick={this.changeTrack}
      >
        {this.props.title}
      </div>
    );
  }
}

export default Button;
