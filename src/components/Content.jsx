import React from 'react';
import style from '../style/Content.module.css';
import Header from './Header';
import Main from './Main';
import getProjects from '../js/projects';
import { getUsers } from '../js/users';
import { getTracks } from '../js/tracks';

const BLUE_COLOR = 'rgb(123, 152, 247)';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: getProjects(this.props.email),
      tracks: getTracks(this.props.email),
      users: getUsers(),

      newTask: '',
      newDescription: '',
      newDescriptionEdit: '',
      newTrack: '',
      newTrackName: '',
      startDate: '',
      deadlineDate: '',

      sex: 'Male',
      direction: 'User',
      date: new Date(),
      name: '',
      lastName: '',
      email: '',
      education: '',
      age: '',
      university: '',
      mathScore: '',
      address: '',
      mobilePhone: '',
      skype: '',

      login: '',
      password: '',
    };

    this.changePost = this.changePost.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  clearInputFields = () => {
    this.setState({
      newTask: '',
      newDescription: '',
      startDate: '',
      deadlineDate: '',
      newTrack: '',
    });
  };

  handleInputChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onChange(name, value) {
    this.setState({ [name]: value });
  }

  // tasks
  onChangeStartDate = (startDate) => this.setState({ startDate });
  onChangeDeadlineDate = (deadlineDate) => this.setState({ deadlineDate });

  addNewTask = () => {
    const newTask = {
      taskId: String(
        Math.round(Math.random() * (100000000 + 10000000) - 10000000),
      ),
      title: this.state.newTask,
      userId: this.props.email,
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

    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
    this.clearInputFields();

    const numb = localStorage.length;
    const storageId = 'task_' + numb;
    localStorage.setItem(storageId, JSON.stringify(newTask));
    alert('task has been added');
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

  changeState(task, newState) {
    return { ...task, state: newState, showEditFields: false };
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

  // track

  addNewTrack = (projectId, projectTitle) => {
    const newNote = this.state.newTrack;
    const newTrack = {
      taskId: projectId,
      userId: this.props.email,
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

    const numb = localStorage.length;
    const storageId = 'track_' + numb;
    localStorage.setItem(storageId, JSON.stringify(newTrack));
    alert('track has been added');
  };

  deleteTrack(id) {
    const { tracks } = this.state;
    this.setState({ tracks: tracks.filter((track) => track.trackId !== id) });
  }

  changeTrack(id, action) {
    switch (action) {
      case 'delete': {
        this.deleteTrack(id);
        break;
      }
      case 'edit': {
        alert('edit');
        break;
      }
      default:
        console.log(id);
    }
  }

  // users

  dateOfBirth = (date) => this.setState({ date });
  onChangeStartDate = (startDate) => this.setState({ startDate });
  onChangeDirection = (event) =>
    this.setState({ direction: event.target.value });
  onChangeSex = (event) => this.setState({ sex: event.target.value });
  getCurrentState = () => {
    return [
      this.state.name,
      this.state.lastName,
      this.state.email,
      this.state.education,
      this.state.age,
      this.state.university,
      this.state.mathScore,
      this.state.address,
      this.state.mobilePhone,
      this.state.skype,
    ];
  };

  addNewUser = () => {
    const newUser = {
      sex: this.state.sex,
      direction: this.state.direction,
      date: this.state.date,
      startDate: this.state.startDate,
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      education: this.state.education,
      age: this.state.age,
      university: this.state.university,
      mathScore: this.state.mathScore,
      address: this.state.address,
      mobilePhone: this.state.mobilePhone,
      skype: this.state.skype,
    };

    const { users } = this.state;
    this.setState({
      users: [...users, newUser],
    });

    const numb = localStorage.length;
    const storageId = 'user_' + numb;
    localStorage.setItem(storageId, JSON.stringify(newUser));
    alert('user has been added');
  };

  render() {
    return (
      <div className={style.content}>
        <Header
          showNavbar={this.props.showNavbar}
          authUser={this.props.authUser}
        />
        <Main
          email={this.props.email}
          state={this.state}
          changePost={this.changePost}
          addTrack={this.addNewTrack}
          onChange={this.onChange}
          handleInputChange={this.handleInputChange}
          addNewTask={this.addNewTask}
          onChangeStartDate={this.onChangeStartDate}
          onChangeDeadlineDate={this.onChangeDeadlineDate}
          getCurrentState={this.getCurrentState}
          addNewUser={this.addNewUser}
          changeTrack={this.changeTrack}
        />
      </div>
    );
  }
}

export default Content;
