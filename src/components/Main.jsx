import React from 'react';
import style from '../style/Main.module.css';
import { Route } from 'react-router-dom';

import Home from './tabs/Home';
import Workflow from './tabs/Workflow';
import Statistics from './tabs/Statistics';
import Calendar from './tabs/Calendar';
import Users from './tabs/Users/Users';
import Tracks from './tabs/Tracks/Tracks';
import Tasks from './tabs/Tasks/Tasks';
import UserProgress from './tabs/UserProgress';
import UserTasks from './tabs/UserTasks';

class Main extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <Route
          exact
          path='/'
          render={() => (
            <Home email={this.props.email} direction={this.props.direction} />
          )}
        />
        <Route path='/home' render={() => <Home />} />
        <Route
          path='/workflow'
          render={() => <Workflow email={this.props.email} />}
        />
        <Route path='/statistics' render={() => <Statistics />} />
        <Route path='/calendar' render={() => <Calendar />} />
        <Route
          exact
          path='/users/trac/:userId?'
          render={() => <UserProgress userId=':userId?' />}
        />
        <Route
          exact
          path='/users/task/:userId?'
          render={() => <UserTasks userId=':userId?' />}
        />

        {this.props.direction !== 'Member' ? (
          <Route
            exact
            path='/users'
            render={() => (
              <Users
                direction={this.props.direction}
                email={this.props.email}
              />
            )}
          />
        ) : (
          <></>
        )}
        <Route
          path='/tasks'
          render={() => (
            <Tasks email={this.props.email} direction={this.props.direction} />
          )}
        />
        {this.props.direction === 'Member' ? (
          <Route
            path='/tracks'
            render={() => (
              <Tracks
                direction={this.props.direction}
                email={this.props.email}
              />
            )}
          />
        ) : (
          <></>
        )}
      </main>
    );
  }
}

export default Main;
