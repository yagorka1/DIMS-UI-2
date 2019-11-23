import React from 'react';
import style from '../style/Error.module.css';
import InputText from './InputText';

class Auth extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <InputText
          label={'login'}
          // value={input}
          handleInputChange={this.props.handleInputChange}
          type='email'
          name={'email'}
        />
        <InputText
          label={'password'}
          // value={input}
          handleInputChange={this.props.handleInputChange}
          type='password'
          name={'password'}
        />
        <div
          role='button'
          onClick={this.props.authUser}
          onKeyPress={() => {}}
          tabIndex='0'
          className={style.logIn_button}
        >
          Enter
        </div>
      </div>
    );
  }
}

export default Auth;
