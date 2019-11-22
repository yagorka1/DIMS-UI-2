import React from 'react';
import style from '../../../style/Post.module.css';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.chooseBackgroundColor = this.chooseBackgroundColor.bind(this);
  }

  setBackgroundColor() {
    return {
      backgroundColor: this.props.color,
    };
  }

  chooseBackgroundColor() {
    this.props.changePost(
      this.props.id,
      `changeBackgroundColor`,
      this.props.color,
    );
  }

  render() {
    return (
      <div
        onClick={this.chooseBackgroundColor}
        className={style.paletteItem}
        style={this.setBackgroundColor()}
        role='button'
        onKeyPress={() => {}}
        tabIndex='0'
      ></div>
    );
  }
}

export default Palette;
