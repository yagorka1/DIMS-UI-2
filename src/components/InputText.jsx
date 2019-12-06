import React from 'react';

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
          type={type}
          name={name}
          placeholder={this.props.name}
        />
      </label>
    );
  }
}

export default InputText;
