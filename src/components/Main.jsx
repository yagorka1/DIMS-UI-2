import React from 'react';
import style from '../style/Main.module.css';
import { Route } from 'react-router-dom';
import Home from './tabs/Home';
import Workflow from './tabs/Workflow';
import Statistics from './tabs/Statistics';
import Calendar from './tabs/Calendar';
import Users from './tabs/Users/Users';
import Settings from './tabs/Settings';
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
          render={() => (
            <Workflow
              state={this.props.state}
              changePost={this.props.changePost}
            />
          )}
        />
        <Route path='/statistics' render={() => <Statistics />} />
        <Route path='/calendar' render={() => <Calendar />} />

        <Route
          exact
          path='/users/Track/:userId?'
          render={() => <UserProgress userId={':userId?'} />}
        />
        <Route
          exact
          path='/users/Task/:userId?'
          render={() => <UserTasks userId={':userId?'} />}
        />

        {this.props.direction !== 'Member' ? (
          <Route
            exact
            path='/users'
            render={() => (
              <Users
                state={this.props.state}
                handleInputChange={this.props.handleInputChange}
                getCurrentState={this.props.getCurrentState}
                addNewUser={this.props.addNewUser}
                changeUser={this.props.changeUser}
                onChangeStartDate={this.props.onChangeStartDate}
                onChangeDirection={this.props.onChangeDirection}
                onChangeDeadlineDate={this.props.onChangeDeadlineDate}
                direction={this.props.direction}
              />
            )}
          />
        ) : (
          <div></div>
        )}
        <Route
          path='/Tasks'
          render={() => (
            <Tasks
              state={this.props.state}
              changePost={this.props.changePost}
              posts={this.props.state.tasks}
              newTask={this.props.state.newDescriptionEdit}
              newTrack={this.props.state.newTrack}
              addTrack={this.props.addTrack}
              onChange={this.props.onChange}
              handleInputChange={this.props.handleInputChange}
              addNewTask={this.props.addNewTask}
              onChangeStartDate={this.props.onChangeStartDate}
              onChangeDeadlineDate={this.props.onChangeDeadlineDate}
            />
          )}
        />
        {this.props.direction === 'Member' ? (
          <Route
            path='/Tracks'
            render={() => (
              <Tracks
                state={this.props.state}
                changeTrack={this.props.changeTrack}
                newTask={this.props.state.newTrack}
                onChange={this.props.onChange}
                direction={this.props.direction}
              />
            )}
          />
        ) : (
          <div></div>
        )}
      </main>
    );
  }
}

export default Main;
