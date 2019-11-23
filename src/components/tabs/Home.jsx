import React from 'react';
import style from '../../style/Home.module.css';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={style.home_content}>
        Hello, {this.props.email}. It's home page.
      </div>
    );
  }
}

export default Home;
