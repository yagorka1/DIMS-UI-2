import React from 'react';
import style from '../style/content.module.css';
import Header from './Header';
import Main from './Main';
import axios from 'axios';

class Content extends React.Component {
  componentDidMount() {
    // const users = axios
    //   .get(`http://localhost:50698/api/profiles`)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // console.log(users);
  }

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
