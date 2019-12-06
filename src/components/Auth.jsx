import React from 'react';
import style from '../style/Auth.module.css';
import InputText from './InputText';

class Auth extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <h1>Welcome to Mercury</h1>
        <InputText
          label='login'
          value={this.props.email}
          handleInputChange={this.props.handleInputChange}
          type='email'
          name='email'
        />
        <InputText
          label='password'
          value={this.props.password}
          handleInputChange={this.props.handleInputChange}
          type='password'
          name='password'
        />
        <button onClick={this.props.authUser} className={style.logIn_button}>
          Log In
        </button>
      </div>
    );
  }
}

export default Auth;
