import React from 'react';
import style from '../../../style/pop-up.module.css';
import AddUserForm from './AddUserForm';

class PopUp extends React.Component {
  addNewUser = () => {
    this.props.close();
    this.props.addNewUser();
  };

  render() {
    const { close } = this.props;

    return (
      <div className={style.modal}>
        <a className={style.close} onClick={close}>
          &times;
        </a>
        <div className={style.header}> Modal Title </div>
        <AddUserForm
          handleInputChange={this.props.handleInputChange}
          addNewUser={this.props.addNewUserForm}
          close={this.props.close}
        />
      </div>
    );
  }
}

export default PopUp;
