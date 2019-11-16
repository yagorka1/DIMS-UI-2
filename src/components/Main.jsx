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
import AddProject from './tabs/AddProject/AddProject';

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tasks: [],
      newTask: '',
      newDescription: '',
      startDate: '',
      deadlineDate: '',
    };
  }

  handleInputChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onChangeStartDate = (startDate) => this.setState({ startDate });
  onChangeDeadlineDate = (deadlineDate) => this.setState({ deadlineDate });

  clearInputFields = () => {
    this.setState({
      newTask: '',
      newDescription: '',
      startDate: '',
      deadlineDate: '',
    });
  };

  addNewProject = () => {
    const newTask = {
      taskId: String(
        Math.round(Math.random() * (100000000 + 10000000) - 10000000),
      ),
      title: this.state.newTask,
      description: this.state.newTask,
      startDate: this.state.startDate,
      deadlineDate: this.state.deadlineDate,
      state: 'toDo',
    };

    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
    console.log(newTask);
    this.clearInputFields();
  };

  render() {
    return (
      <main className={style.main}>
        <Route path='/home' render={() => <Home />} />
        <Route
          path='/workflow'
          render={() => <Workflow state={this.state} />}
        />
        <Route path='/statistics' render={() => <Statistics />} />
        <Route path='/calendar' render={() => <Calendar />} />
        <Route path='/users' render={() => <Users />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/AddUser' render={() => <AddUser />} />
        <Route
          path='/AddProject'
          render={() => (
            <AddProject
              state={this.state}
              handleInputChange={this.handleInputChange}
              addNewProject={this.addNewProject}
              onChangeStartDate={this.onChangeStartDate}
              onChangeDeadlineDate={this.onChangeDeadlineDate}
            />
          )}
        />
      </main>
    );
  }
}

export default Main;
