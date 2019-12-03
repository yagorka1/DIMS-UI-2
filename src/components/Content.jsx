import React from 'react';
import style from '../style/Content.module.css';
import Header from './Header';
import Main from './Main';
import getTasks from '../js/tasks';
import { getUsers } from '../js/users';
import { getTracks } from '../js/tracks';

class Content extends React.Component {
  componentDidMount() {
    const tasks = getTasks(this.props.email);
    const tracks = getTracks(this.props.email);
    const users = getUsers();
    this.setState({ users, tracks, tasks });
  }

  render() {
    return (
      <div className={style.content}>
        <Header
          showNavbar={this.props.showNavbar}
          authUser={this.props.authUser}
        />
        <Main direction={this.props.direction} email={this.props.email} />
      </div>
    );
  }
}

export default Content;
