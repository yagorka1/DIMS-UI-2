import React from 'react';
import style from '../style/Input.module.css';

class InputText extends React.Component {
  onChange = (event) => {
    const { name } = this.props;

    this.props.handleInputChange(name, event.target.value);
  };

  render() {
    const { label, name, value, type } = this.props;
    return (
      <label>
        {label}:
        <input
          value={value}
          onChange={this.onChange}
          // onInput={this.onChange}
          type={type}
          name={name}
          placeholder={this.props.name}
          // className={style.inputTime}
          // max={12}
        />
      </label>
    );
  }
}

export default InputText;
