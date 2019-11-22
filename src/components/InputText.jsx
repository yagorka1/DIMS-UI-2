import React from 'react';

class InputText extends React.Component {
  onChange = (event) => {
    const name = this.props.name;
    this.props.handleInputChange(name, event);
  };

  render() {
    const label = this.props.label;
    const name = this.props.name;
    const value = this.props.value;
    const type = this.props.type;
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
