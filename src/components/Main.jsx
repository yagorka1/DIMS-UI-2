import React from 'react';
import style from '../style/Main.module.css';
import { Route } from 'react-router-dom';
import Home from './tabs/Home';
import Workflow from './tabs/Workflow';
import Statistics from './tabs/Statistics';
import Calendar from './tabs/Calendar';
import Users from './tabs/Users';
import Settings from './tabs/Settings';
import AddUser from './tabs/AddUser/AddUser';

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
        <Route path='/AddUser' render={() => <AddUser />} />
      </main>
    );
  }
}

export default Main;
