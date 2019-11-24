import React from 'react';
import style from './App.module.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Auth from './components/Auth';
import { checkData } from './js/users';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: true,
      login: false, // is the user logged in?
      authField: false, // show field for input email and password
      email: '',
      password: '',
    };
  }

  handleInputChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  showNavbar = () => {
    this.setState({ showNavbar: !this.state.showNavbar });
  };

  authUser = () => {
    const email = this.state.email;
    const password = this.state.password;

    if (checkData(email, password)) this.setState({ login: !this.state.login });
    else alert('Wrong login');
  };

  render() {
    const { showNavbar } = this.state;

    return (
      <div className={style.App1}>
        {this.state.login ? (
          <div className={style.App}>
            {showNavbar && <NavBar showNavbar={this.showNavbar} />}
            <Content
              showNavbar={this.showNavbar}
              login={this.state.login}
              authUser={this.authUser}
              email={this.state.email}
            />
          </div>
        ) : (
          <Auth
            authUser={this.authUser}
            handleInputChange={this.handleInputChange}
            email={this.state.email}
            password={this.state.password}
          />
        )}
      </div>
    );
  }
}

export default App;
