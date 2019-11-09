import React from 'react';
import style from '../style/Main.module.css';
import { Route } from 'react-router-dom';
import Home from './vvv/Home';
import Workflow from './vvv/Workflow';
import Statistics from './vvv/Statistics';
import Calendar from './vvv/Calendar';
import Users from './vvv/Users';
import Settings from './vvv/Settings';

class Main extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <Route path='/home' render={() => <Home />} />
        <Route path='/workflow' render={() => <Workflow />} />
        <Route path='/statistics' render={() => <Statistics />} />
        <Route path='/calendar' render={() => <Calendar />} />
        <Route path='/users' render={() => <Users />} />
        <Route path='/settings' render={() => <Settings />} />
      </main>
    );
  }
}

export default Main;
