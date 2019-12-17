import React from 'react';
import style from '../style/input-text.module.css';

class InputText extends React.Component {
  onChange = (event) => {
    const { name } = this.props;
    this.props.handleInputChange(name, event.target.value);
  };

  render() {
    const { label, name, value, type } = this.props;
    return (
      <label className={style.input_text}>
        <div>{label}:</div>
        <input
          value={value}
          onChange={this.onChange}
          type={type}
          name={name}
          placeholder={this.props.name}
        />
      </label>
    );
  }
}

export default InputText;
