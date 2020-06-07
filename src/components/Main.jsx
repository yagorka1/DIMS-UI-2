import React from 'react';
import style from '../style/Main.module.css';
import { Route } from 'react-router-dom';

import Home from './tabs/Home';
import Workflow from './tabs/Workflow';
import Calendar from './tabs/Calendar';
import Users from './tabs/Users/Users';
import Tracks from './tabs/Tracks/Tracks';
import Tasks from './tabs/Tasks/Tasks';
import UserProgress from './tabs/UserProgress';
import UserTasks from './tabs/UserTasks';
import Statistics from './tabs/Statistics/Statistics';
import Time from './tabs/Time/Time';
import UserStatistics from './tabs/Statistics/UserStatistics';
import UserTime from './tabs/Time/UserTime';

class Main extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <Route
          exact
          path='/'
          render={() => (
            <Home email={this.props.email} role={this.props.role} />
          )}
        />
        <Route path='/home' render={() => <Home />} />
        <Route
          path='/workflow'
          render={() => <Workflow email={this.props.email} />}
        />
        <Route
          path='/time'
          render={() => (
            <Time role={this.props.role} email={this.props.email} />
          )}
        />
        <Route path='/calendar' render={() => <Calendar />} />
        <Route path='/users/trac/:userId?' component={UserProgress} />
        <Route path='/users/task/:userId?' component={UserTasks} />
        <Route path='/users/statistics/:userId?' component={UserStatistics} />
        <Route path='/users/time/:userId?' component={UserTime} />

        {this.props.role !== 'Member' ? (
          <Route
            exact
            path='/users'
            render={() => (
              <Users role={this.props.role} email={this.props.email} />
            )}
          />
        ) : (
          <></>
        )}
        <Route
          path='/tasks'
          render={() => (
            <Tasks email={this.props.email} role={this.props.role} />
          )}
        />

        <Route
          path='/statistics'
          render={() => (
            <Statistics role={this.props.role} email={this.props.email} />
          )}
        />
        {this.props.role === 'Member' ? (
          <Route
            path='/tracks'
            render={() => (
              <Tracks role={this.props.role} email={this.props.email} />
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
