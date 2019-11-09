import React from 'react';
import style from '../style/Content.module.css';
import Header from './Header';
import Main from './Main';

class Content extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <Header showNavbar={this.props.showNavbar} />
        <Main />
      </div>
    );
  }
}

export default Content;
