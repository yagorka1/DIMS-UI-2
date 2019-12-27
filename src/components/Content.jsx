import React from 'react';
import style from '../style/content.module.css';
import Header from './Header';
import Main from './Main';
// import axios from 'axios';

class Content extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <Header
          showNavbar={this.props.showNavbar}
          authUser={this.props.authUser}
        />
        <Main role={this.props.role} email={this.props.email} />
      </div>
    );
  }
}

export default Content;
