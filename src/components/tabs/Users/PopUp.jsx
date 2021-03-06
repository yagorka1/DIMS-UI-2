import React from 'react';
import style from '../../../style/pop-up.module.css';
import InputText from '../../InputText';
import DatePicker from 'react-date-picker';
import inputNames from '../../../js/input_text';

class PopUp extends React.Component {
  addNewUser = () => {
    this.props.close();
    this.props.addNewUser();
  };

  render() {
    const { close } = this.props;
    const state = this.props.getCurrentState();

    return (
      <div className={style.modal}>
        <a className={style.close} onClick={close}>
          &times;
        </a>
        <div className={style.header}> Modal Title </div>
        <form className={style.content}>
          {state.map((input, i) => (
            <InputText
              label={inputNames[i].label}
              value={input}
              handleInputChange={this.props.handleInputChange}
              type='text'
              name={inputNames[i].name}
            />
          ))}
          <label>
            Direction:
            <select
              value={this.props.state.direction}
              onBlur={this.handleOnBlur}
              onChange={this.props.onChangeDirection}
            >
              <option value='Member'>Member</option>
              <option value='Admin'>Admin</option>
              <option value='Mentor'>Mentor</option>
            </select>
          </label>
          <label>
            Sex:
            <select
              value={this.props.state.sex}
              onBlur={this.handleOnBlur}
              onChange={this.props.onChangeSex}
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </label>
          Date of Birth:
          <DatePicker
            onChange={this.props.dateOfBirth}
            value={this.props.state.date}
          />
          Start Date:
          <DatePicker
            onChange={this.props.onChangeStartDate}
            value={this.props.state.startDate}
          />
          <input type='button' onClick={this.addNewUser} value='Save' />
        </form>
      </div>
    );
  }
}

export default PopUp;
