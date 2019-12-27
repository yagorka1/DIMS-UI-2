import React from 'react';

class InputText extends React.Component {
  onChange = (event) => {
    const { name } = this.props;
    this.props.handleInputChange(name, event.target.value);
  };

  render() {
    const { name, value, type } = this.props;
    return (
      <input
        value={value}
        onChange={this.onChange}
        type={type}
        name={name}
        placeholder={this.props.name}
      />
    );
  }
}

export default InputText;
