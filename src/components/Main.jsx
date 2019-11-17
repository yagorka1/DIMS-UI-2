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

  task = [{}];

  addNewProject = () => {
    console.log(JSON.stringify(this.state.deadlineDate));
    const newTask = {
      taskId: String(
        Math.round(Math.random() * (100000000 + 10000000) - 10000000),
      ),
      title: this.state.newTask,
      description: this.state.newTask,
      startDate: this.state.startDate,
      deadlineDate: this.state.deadlineDate,
      state: 'toDo',
      showEditFields: false,
    };

    localStorage.setItem('testObject', JSON.stringify(newTask));

    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
    console.log(newTask);
    this.clearInputFields();
  };

  showEditFields(task) {
    if (task.showEditFields) {
      return { ...task, showEditFields: false };
    } else {
      return { ...task, showEditFields: true };
    }
  }

  changeState(task, newState) {
    return { ...task, state: newState, showEditFields: false };
  }

  changePost = (id, action, color) => {
    if (action === `delete`) {
      this.deletePost(id);
    } else {
      this.setState({
        tasks: this.state.tasks.map((task) => {
          if (task.taskId === id) {
            switch (action) {
              case `showEditFields`: {
                task = this.showEditFields(task);
                break;
              }
              case `toDo`: {
                task = this.changeState(task, `toDo`);
                break;
              }
              case `inProgress`: {
                task = this.changeState(task, `inProgress`);
                break;
              }
              case `completed`: {
                task = this.changeState(task, `completed`);
                break;
              }
              // case `changeStatus`: {
              //   post = this.changeStatus(post);
              //   break;
              // }
              // case `edit`: {
              //   post = this.showChangeTaskField(post);
              //   break;
              // }
              // case `color`: {
              //   post = this.showPalette(post);
              //   break;
              // }
              // case `changeBackgroundColor`: {
              //   post = this.changeBackgroundColor(post, color);
              //   break;
              // }
              // case `push`: {
              //   post = this.pushEditTask(post);
              //   break;
              // }
              default:
                return task;
            }
          }
          return task;
        }),
      });
    }
  };

  render() {
    return (
      <main className={style.main}>
        <Route path='/home' render={() => <Home />} />
        <Route
          path='/workflow'
          render={() => (
            <Workflow state={this.state} changePost={this.changePost} />
          )}
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
