import React from 'react';
import style from './App.module.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Auth from './components/Auth';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: true,
      login: false,
      authField: false,
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
    this.setState({ login: !this.state.login });
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
            />
          </div>
        ) : (
          <Auth
            authUser={this.authUser}
            handleInputChange={this.handleInputChange}
          />
        )}
      </div>
    );
  }
}

export default App;
