import React from 'react';
import style from '../../../style/Tasks.module.css';
import Popup from 'reactjs-popup';
import PopUp from './PopUp.jsx';
import Post from './Post';
import {
  setChangeDataInStorage,
  setDataInStorage,
} from '../../../js/setDataInStorage';
import colors from '../../../js/color';
import getId from '../../../js/getId';
import { getUsers } from '../../../js/users';
import { getTracks } from '../../../js/tracks';
import getProjects from '../../../js/projects';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  componentWillMount() {
    const tasks = getProjects(this.props.email);
    const tracks = getTracks(this.props.email);
    const users = getUsers();
    this.setState({ users, tracks, tasks });
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

  addTrack = (projectId, projectTitle) => {
    const { newTrack } = this.state;
    const track = {
      taskId: projectId,
      userId: this.props.email,
      trackId: getId(),
      taskName: projectTitle,
      trackNode: newTrack,
      trackDate: new Date(),
    };

    const { tracks } = this.state;
    this.setState({
      tracks: [...tracks, track],
    });
    this.clearInputFields();
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.taskId === projectId) {
          setChangeDataInStorage(task, 'taskId', 'task');
          return { ...task, showTrackField: false };
        }
        return task;
      }),
    });

    setDataInStorage(track, 'trac');
  };

  onChangeStartDate = (startDate) => this.setState({ startDate });
  onChangeDeadlineDate = (deadlineDate) => this.setState({ deadlineDate });

  addNewTask = (emails) => {
    const { startDate, deadlineDate } = this.state;
    for (let i = 0; i < emails.length; i++) {
      const newTask = {
        taskId: getId(),
        title: this.state.newTask,
        userId: emails[i],
        description: this.state.newDescription,
        startDate,
        deadlineDate,
        state: 'toDo',
        showEditFields: false,

        priority: 'Medium',
        chooseColorField: false,
        backgroundColorPost: colors[8],
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

      setDataInStorage(newTask, 'task');
    }
  };

  showChangeTaskField(task, name) {
    if (task[name]) {
      return { ...task, [name]: false };
    }
    return { ...task, [name]: true };
  }

  changeStatus(task) {
    if (!task.status) {
      return {
        ...task,
        status: true,
        showEditField: false,
        chooseColorField: false,
      };
    }
    return {
      ...task,
      status: false,
      showEditField: false,
      chooseColorField: false,
    };
  }

  pushEditTask(task) {
    return {
      ...task,
      description: this.state.newTask,
      showChangeTaskField: false,
    };
  }

  showEditField(task) {
    if (task.showEditField) {
      return { ...task, showEditField: false };
    }
    this.onChange('newTask', task.description);
    return { ...task, showEditField: true };
  }

  showPalette(task) {
    if (!task.chooseColorField) {
      return { ...task, chooseColorField: true };
    }
    return { ...task, chooseColorField: false };
  }

  deletePost(id) {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => task.taskId !== id) });
  }

  changeBackgroundColor(task, color) {
    return { ...task, backgroundColorPost: color, chooseColorField: false };
  }

  switchAction(task, action, id, color) {
    if (task.taskId === id) {
      switch (action) {
        case `showEditField`: {
          task = this.showEditField(task);
          break;
        }
        case `changeStatus`: {
          task = this.changeStatus(task);
          break;
        }
        case `edit`: {
          task = this.showChangeTaskField(task, 'showChangeTaskField');
          break;
        }
        case `track`: {
          task = this.showChangeTaskField(task, 'showTrackField');
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
          this.addNewTrack(task.taskId, task.title);
          break;
        }
        default:
          return task;
      }

      setChangeDataInStorage(task, 'taskId', 'task');
    }

    return task;
  }

  changePost(id, action, color) {
    if (action === `delete`) {
      this.deletePost(id);
    } else {
      this.setState({
        tasks: this.state.tasks.map((task) =>
          this.switchAction(task, action, id, color),
        ),
      });
    }
  }

  getTask(tasks, name) {
    const newTasks = tasks.filter((task) => task.state === name);
    return newTasks;
  }

  render() {
    let tasks = this.state.tasks;

    if (this.props.tasks === undefined) tasks = this.state.tasks;
    else tasks = this.props.tasks;

    const toDoTask = this.getTask(tasks, 'toDo');
    const inProgressTask = this.getTask(tasks, 'inProgress');
    const completedTask = this.getTask(tasks, 'completed');

    return (
      <div className={style.projects_container}>
        <Popup modal trigger={<button>Add post</button>}>
          {(close) => (
            <PopUp
              close={close}
              state={this.state}
              handleInputChange={this.handleInputChange}
              addNewTask={this.addNewTask}
              onChangeStartDate={this.onChangeStartDate}
              onChangeDeadlineDate={this.onChangeDeadlineDate}
            />
          )}
        </Popup>
        <section className={style.toDo_container}>
          <h1 className={style.section_title}>
            ToDo <span className={style.count_task}>({toDoTask.length})</span>
          </h1>
          {toDoTask.map((task) => (
            <Post
              task={task}
              key={task.id}
              changePost={this.changePost}
              newTask={this.state.newTask}
              newTrack={this.state.newTrack}
              onChange={this.onChange}
              addTrack={this.addTrack}
            />
          ))}
        </section>
        <section className={style.inProgress_container}>
          <h1 className={style.section_title}>
            In Progress{' '}
            <span className={style.count_task}>({inProgressTask.length})</span>
          </h1>
          {inProgressTask.map((task) => (
            <Post
              task={task}
              key={task.id}
              changePost={this.changePost}
              newTask={this.state.newTask}
              newTrack={this.state.newTrack}
              onChange={this.onChange}
              addTrack={this.addTrack}
            />
          ))}
        </section>
        <section className={style.completed_container}>
          <h1 className={style.section_title}>
            Completed{' '}
            <span className={style.count_task}>({completedTask.length})</span>
          </h1>
          {completedTask.map((task) => (
            <Post
              task={task}
              key={task.id}
              changePost={this.changePost}
              newTask={this.state.newTask}
              newTrack={this.state.newTrack}
              onChange={this.onChange}
              addTrack={this.addTrack}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Tasks;
