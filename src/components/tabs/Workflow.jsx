import React from 'react';
import style from '../../style/Workflow.module.css';
import Task from './Task';

class Workflow extends React.Component {
  constructor(props) {
    super(props);
  }

  getToDoTask(tasks) {
    const newTasks = tasks.filter((task) => task.state === 'toDo');
    return newTasks;
  }

  getInProgressTask(tasks) {
    const newTasks = tasks.filter((task) => task.state === 'inProgress');
    return newTasks;
  }

  getCompletedTask(tasks) {
    const newTasks = tasks.filter((task) => task.state === 'completed');
    return newTasks;
  }

  render() {
    const tasks = this.props.state.tasks;
    const toDoTask = this.getToDoTask(tasks);
    const inProgressTask = this.getInProgressTask(tasks);
    const completedTask = this.getCompletedTask(tasks);

    return (
      <div className={style.workflow_container}>
        <section className={style.toDo_container}>
          <h1 className={style.section_title}>
            ToDo <span className={style.count_task}>({toDoTask.length})</span>
          </h1>
          {toDoTask.map((task) => (
            <Task
              task={task}
              key={task.id}
              changePost={this.props.changePost}
            />
          ))}
        </section>
        <section className={style.inProgress_container}>
          <h1 className={style.section_title}>
            In Progress{' '}
            <span className={style.count_task}>({inProgressTask.length})</span>
          </h1>
          {inProgressTask.map((task) => (
            <Task
              task={task}
              key={task.id}
              changePost={this.props.changePost}
            />
          ))}
        </section>
        <section className={style.completed_container}>
          <h1 className={style.section_title}>
            Completed{' '}
            <span className={style.count_task}>({completedTask.length})</span>
          </h1>
          {completedTask.map((task) => (
            <Task
              task={task}
              key={task.id}
              changePost={this.props.changePost}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Workflow;
