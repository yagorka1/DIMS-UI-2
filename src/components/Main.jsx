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
import Tracks from './tabs/Tracks/Tracks';
import projects from '../js/projects';

import AddTask from './tabs/AddTask/AddTask';
import Tasks from './tabs/Tasks/Tasks';
// import { BLUE_COLOR } from '../js/color';
const BLUE_COLOR = 'rgb(123, 152, 247)';

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tasks: projects,
      tracks: [],
      newTask: '',
      newDescription: '',
      newDescriptionEdit: '',
      newTrack: '',
      newTrackName: '',
      startDate: '',
      deadlineDate: '',
    };

    this.changePost = this.changePost.bind(this);
    this.onChange = this.onChange.bind(this);
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
      newTrack: '',
    });
  };

  addNewTrack = (projectId, projectTitle) => {
    const newNote = this.state.newTrack;
    const newTrack = {
      taskId: projectId,
      // userId: ,
      trackId: String(
        Math.round(Math.random() * (100000000 + 10000000) - 10000000),
      ),
      taskName: projectTitle,
      trackNode: newNote,
      trackDate: new Date(),
    };

    const { tracks } = this.state;
    this.setState({
      tracks: [...tracks, newTrack],
    });
    this.clearInputFields();
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.taskId === projectId) {
          return { ...task, showTrackField: false };
        }
        return task;
      }),
    });
  };

  addNewTask = () => {
    alert('dedede');
    const newTask = {
      taskId: String(
        Math.round(Math.random() * (100000000 + 10000000) - 10000000),
      ),
      title: this.state.newTask,
      description: this.state.newDescription,
      startDate: this.state.startDate,
      deadlineDate: this.state.deadlineDate,
      state: 'toDo',
      showEditFields: false,

      priority: 'Medium',
      chooseColorField: false,
      backgroundColorPost: BLUE_COLOR,
      status: false,
      showEditField: false,
      showChangeTaskField: false,
      showTrackField: false,
    };

    console.log(newTask);

    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
    this.clearInputFields();
  };

  showEditFields(task) {
    if (task.showEditFields) {
      return { ...task, showEditFields: false };
    } else {
      return { ...task, showEditFields: true };
    }
  }

  showEditField(task) {
    if (task.showEditField) {
      return { ...task, showEditField: false };
    } else {
      this.onChange('newDescriptionEdit', task.description);
      return { ...task, showEditField: true };
    }
  }

  showChangeTaskField(task) {
    if (task.showChangeTaskField) {
      return { ...task, showChangeTaskField: false };
    } else {
      return { ...task, showChangeTaskField: true };
    }
  }

  showTrackField(task) {
    if (task.showTrackField) {
      return { ...task, showTrackField: false };
    } else {
      return { ...task, showTrackField: true };
    }
  }

  changeStatus(task) {
    if (!task.status) {
      return {
        ...task,
        status: true,
        showEditField: false,
        chooseColorField: false,
      };
    } else {
      return {
        ...task,
        status: false,
        showEditField: false,
        chooseColorField: false,
      };
    }
  }

  pushEditTask(task) {
    return {
      ...task,
      description: this.state.newDescriptionEdit,
      showChangeTaskField: false,
    };
  }

  showPalette(task) {
    if (!task.chooseColorField) {
      return { ...task, chooseColorField: true };
    } else {
      return { ...task, chooseColorField: false };
    }
  }

  deletePost(id) {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => task.taskId !== id) });
  }

  changeBackgroundColor(task, color) {
    return { ...task, backgroundColorPost: color, chooseColorField: false };
  }

  onChange(name, value) {
    this.setState({ [name]: value });
  }

  changePost(id, action, color) {
    if (action === `delete`) {
      this.deletePost(id);
    } else {
      this.setState({
        tasks: this.state.tasks.map((task) => {
          if (task.taskId === id) {
            switch (action) {
              case `showEditField`: {
                task = this.showEditField(task);
                break;
              }
              case `showEditFields`: {
                task = this.showEditFields(task);
                break;
              }
              case `changeStatus`: {
                task = this.changeStatus(task);
                break;
              }
              case `edit`: {
                task = this.showChangeTaskField(task);
                break;
              }
              case `track`: {
                task = this.showTrackField(task);
                break;
              }
              case `color`: {
                task = this.showPalette(task);
                break;
              }
              case `changeBackgroundColor`: {
                task = this.changeBackgroundColor(task, color);
                break;
              }
              case `push`: {
                task = this.pushEditTask(task);
                break;
              }
              case `pushTrack`: {
                task = this.addNewTrack(task.taskId, task.title);
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
              default:
                return task;
            }
          }
          return task;
        }),
      });
    }
  }

  changeState(task, newState) {
    return { ...task, state: newState, showEditFields: false };
  }

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
          path='/AddTask'
          render={() => (
            <AddTask
              state={this.state}
              handleInputChange={this.handleInputChange}
              addNewTask={this.addNewTask}
              onChangeStartDate={this.onChangeStartDate}
              onChangeDeadlineDate={this.onChangeDeadlineDate}
            />
          )}
        />
        <Route
          path='/Tasks'
          render={() => (
            <Tasks
              state={this.state}
              changePost={this.changePost}
              posts={this.state.tasks}
              newTask={this.state.newDescriptionEdit}
              newTrack={this.state.newTrack}
              addTrack={this.addNewTrack}
              onChange={this.onChange}
            />
          )}
        />
        <Route
          path='/Tracks'
          render={() => (
            <Tracks
              state={this.state}
              changePost={this.changePost}
              posts={this.state.tasks}
              newTask={this.state.newDescriptionEdit}
              onChange={this.onChange}
            />
          )}
        />
      </main>
    );
  }
}

export default Main;
