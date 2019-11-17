import React from 'react';
import style from '../../../style/Projects.module.css';
import Task from '../Task';
import Post from './Post';

class Projects extends React.Component {
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
      <div className={style.projects_container}>
        <section className={style.toDo_container}>
          <h1 className={style.section_title}>
            ToDo <span className={style.count_task}>({toDoTask.length})</span>
          </h1>
          {toDoTask.map((post) => (
            <Post
              post={post}
              key={post.id}
              changePost={this.props.changePost}
              newTask={this.props.newTask}
              onChange={this.props.onChange}
            />
          ))}
        </section>
        <section className={style.inProgress_container}>
          <h1 className={style.section_title}>
            In Progress{' '}
            <span className={style.count_task}>({inProgressTask.length})</span>
          </h1>
          {inProgressTask.map((post) => (
            <Post
              post={post}
              key={post.id}
              changePost={this.props.changePost}
              newTask={this.props.newTask}
              onChange={this.props.onChange}
            />
          ))}
        </section>
        <section className={style.completed_container}>
          <h1 className={style.section_title}>
            Completed{' '}
            <span className={style.count_task}>({completedTask.length})</span>
          </h1>
          {completedTask.map((post) => (
            <Post
              post={post}
              key={post.id}
              changePost={this.props.changePost}
              newTask={this.props.newTask}
              onChange={this.props.onChange}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Projects;
