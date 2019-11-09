import React from 'react';
import style from './App.module.css';
import NavBar from './components/NavBar';
import Content from './components/Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
    };

    this.showNavbar = this.showNavbar.bind(this);
  }

  showNavbar() {
    this.setState({ showNavbar: !this.state.showNavbar });
  }

  render() {
    return (
      <div className={style.App}>
        {this.state.showNavbar ? <NavBar /> : <div></div>}
        <Content showNavbar={this.showNavbar} />
      </div>
    );
  }
}

export default App;
