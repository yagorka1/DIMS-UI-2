import React from 'react';
import style from '../../style/home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={style.home_content}>
        Hello, {this.props.email}. It's home page. {this.props.direction}
      </div>
    );
  }
}

export default Home;
