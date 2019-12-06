import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
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

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  showNavbar = () => {
    this.setState({ showNavbar: !this.state.showNavbar });
  };

  authUser = () => {
    const { email, password } = this.state;
    const direction = checkData(email, password);

    if (direction) {
      this.setState({ login: !this.state.login });
      this.setState({ direction });
    } else {
      alert('Wrong login');
    }
  };

  render() {
    const { showNavbar } = this.state;

    return (
      <div className={style.App_wrapper}>
        {this.state.login ? (
          <div className={style.App}>
            {showNavbar && (
              <NavBar
                showNavbar={this.showNavbar}
                direction={this.state.direction}
              />
            )}
            <Content
              showNavbar={this.showNavbar}
              login={this.state.login}
              direction={this.state.direction}
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
