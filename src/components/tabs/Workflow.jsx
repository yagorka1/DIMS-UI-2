import React from 'react';
import style from '../../style/Workflow.module.css';
import Task from './Task';
import getTasks from '../../js/tasks';
import { setChangeDataInStorage } from '../../js/setDataInStorage';

class Workflow extends React.Component {
  constructor(props) {
    super(props);

    this.changePost = this.changePost.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const tasks = getTasks(props.email);
    return { tasks };
  }

  getTask(tasks, name) {
    const newTasks = tasks.filter((task) => task.state === name);
    return newTasks;
  }

  handleInputChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  changeState(task, newState) {
    return { ...task, state: newState, showEditFields: false };
  }

  showChangeTaskField(task, name) {
    if (task[name]) {
      return { ...task, [name]: false };
    }
    return { ...task, [name]: true };
  }

  changePost(id, action, color) {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.taskId === id) {
          switch (action) {
            case `changeStatus`: {
              task = this.changeStatus(task);
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
            case `showEditFields`: {
              task = this.showChangeTaskField(task, 'showEditFields');
              break;
            }
            default:
              return task;
          }
          setChangeDataInStorage(task, 'taskId', 'task');
        }

        return task;
      }),
    });
  }

  render() {
    const tasks = this.state.tasks;
    const toDoTask = this.getTask(tasks, 'toDo');
    const inProgressTask = this.getTask(tasks, 'inProgress');
    const completedTask = this.getTask(tasks, 'completed');

    return (
      <div className={style.workflow_container}>
        <section className={style.toDo_container}>
          <h1 className={style.section_title}>
            ToDo <span className={style.count_task}>({toDoTask.length})</span>
          </h1>
          {toDoTask.map((task) => (
            <Task task={task} key={task.id} changePost={this.changePost} />
          ))}
        </section>
        <section className={style.inProgress_container}>
          <h1 className={style.section_title}>
            In Progress{' '}
            <span className={style.count_task}>({inProgressTask.length})</span>
          </h1>
          {inProgressTask.map((task) => (
            <Task task={task} key={task.id} changePost={this.changePost} />
          ))}
        </section>
        <section className={style.completed_container}>
          <h1 className={style.section_title}>
            Completed{' '}
            <span className={style.count_task}>({completedTask.length})</span>
          </h1>
          {completedTask.map((task) => (
            <Task task={task} key={task.id} changePost={this.changePost} />
          ))}
        </section>
      </div>
    );
  }
}

export default Workflow;
