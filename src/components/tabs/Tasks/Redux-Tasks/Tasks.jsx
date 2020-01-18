import React from 'react';
import style from '../../../../style/tasks.module.css';
import TaskContainer from './TaskContainer';
import PopUpContainer from './PopUpContainer';
import Popup from 'reactjs-popup';
import { USER } from '../../../../js/roles';
import { getUserTask } from '../../../../js/tasks';

class Tasks extends React.Component {
  render() {
    const { tasks, email, role } = this.props;

    const toDoTask = getUserTask(tasks, 'toDo', email, role);
    const inProgressTask = getUserTask(tasks, 'inProgress', email, role);
    const completedTask = getUserTask(tasks, 'completed', email, role);

    return (
      <div className={style.projects_container}>
        {this.props.role !== USER && (
          <Popup modal trigger={<button>Add task</button>}>
            {(close) => <PopUpContainer close={close} />}
          </Popup>
        )}
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
