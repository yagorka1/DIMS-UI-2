import React from 'react';
import style from '../style/Auth.module.css';
import InputText from './InputText';

class Auth extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <InputText
          label={'login'}
          value={this.props.email}
          handleInputChange={this.props.handleInputChange}
          type='email'
          name={'email'}
        />
        <InputText
          label={'password'}
          value={this.props.password}
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
          Log In
        </div>
      </div>
    );
  }
}

export default Auth;
