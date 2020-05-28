import React from 'react';
import style from '../../style/Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={style.home_content}>
        Hello, {this.props.email}. It's home page. {this.props.role}
      </div>
    );
  }
}

export default Home;
