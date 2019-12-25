import React from 'react';
import style from '../../../../style/tasks.module.css';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
  getTask(tasks, name) {
    const newTasks = tasks.filter((task) => task.state === name);
    return newTasks;
  }
  render() {
    const { tasks } = this.props;

    const toDoTask = this.getTask(tasks, 'toDo');
    const inProgressTask = this.getTask(tasks, 'inProgress');
    const completedTask = this.getTask(tasks, 'completed');

    return (
      <div className={style.projects_container}>
        <section className={style.toDo_container}>
          <h1 className={style.section_title}>
            ToDo <span className={style.count_task}>({toDoTask.length})</span>
          </h1>
          {toDoTask.map((task) => (
            <TaskContainer task={task} key={task.id} role={this.props.role} />
          ))}
        </section>
        <section className={style.inProgress_container}>
          <h1 className={style.section_title}>
            In Progress{' '}
            <span className={style.count_task}>({inProgressTask.length})</span>
          </h1>
          {inProgressTask.map((task) => (
            <TaskContainer task={task} key={task.id} role={this.props.role} />
          ))}
        </section>
        <section className={style.completed_container}>
          <h1 className={style.section_title}>
            Completed{' '}
            <span className={style.count_task}>({completedTask.length})</span>
          </h1>
          {completedTask.map((task) => (
            <TaskContainer task={task} key={task.id} role={this.props.role} />
          ))}
        </section>
      </div>
    );
  }
}

export default Tasks;
