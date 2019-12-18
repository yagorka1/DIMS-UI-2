import React from 'react';
import style from '../../../style/pop-up.module.css';
import InputText from '../../InputText';
import DatePicker from 'react-date-picker';
import inputNames from '../../../js/input_text';
import Try from './try';

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
        <Try />
      </div>
    );
  }
}

export default PopUp;
