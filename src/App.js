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
    const role = checkData(email, password);

    if (role) {
      this.setState({ login: !this.state.login });
      this.setState({ role });
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
              <NavBar showNavbar={this.showNavbar} role={this.state.role} />
            )}
            <Content
              showNavbar={this.showNavbar}
              login={this.state.login}
              role={this.state.role}
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
