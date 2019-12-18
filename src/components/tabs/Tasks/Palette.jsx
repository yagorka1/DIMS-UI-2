import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../style/post.module.css';

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
      <button
        onClick={this.chooseBackgroundColor}
        className={style.paletteItem}
        style={this.setBackgroundColor()}
      ></button>
    );
  }
}

Palette.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
};

export default Palette;
