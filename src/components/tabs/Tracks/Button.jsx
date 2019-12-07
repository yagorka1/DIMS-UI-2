import React from 'react';
import styleButton from '../../../style/button.module.css';

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
      <button className={styleButton.button} onClick={this.changeTrack}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
