import React from 'react';
import style from './App.module.css';
import NavBar from './components/NavBar';
import Content from './components/Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: true,
    };
  }

  showNavbar = () => {
    this.setState({ showNavbar: !this.state.showNavbar });
  };

  render() {
    const { showNavbar } = this.state;

    return (
      <div className={style.App}>
        {showNavbar && <NavBar />}
        <Content showNavbar={this.showNavbar} />
      </div>
    );
  }
}

export default App;
