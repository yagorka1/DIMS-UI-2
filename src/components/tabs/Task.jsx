import React from 'react';
import style from '../../style/Task.module.css';
import task_photo from '../../assets/images/main/task.png';
import clock_offline from '../../assets/images/main/clock_offline.svg';
import clock_outline from '../../assets/images/main/clock-outline.svg';
import menu from '../../assets/images/main/menu.svg';
import { getTime, getDeadlineStatus } from '../../js/checkTimeOfTask';

class Task extends React.Component {
  handleChange = (action) => {
    console.log(this.props);
    this.props.changePost(this.props.task.taskId, action);
  };

  render() {
    const { task } = this.props;
    return (
      <section className={style.task}>
        <img src={task_photo} className={style.task_photo} alt='task_photo' />
        <div className={style.task_inf}>
          <h3 className={style.title_task}>{task.title}</h3>
          <div className={style.deadline_time_container}>
            {getDeadlineStatus(task.deadlineDate) ? (
              <img
                className={style.clock_image}
                src={clock_offline}
                alt='image_clock'
              />
            ) : (
              <img
                className={style.clock_image}
                src={clock_outline}
                alt='image_clock'
              />
            )}
            {getTime(task.deadlineDate)}
          </div>
        </div>
        <div
          role='button'
          onClick={() => {
            this.handleChange('showEditFields');
          }}
          onKeyPress={() => {}}
          tabIndex='0'
        >
          <img src={menu} className={style.menu_image} alt='menu' />
        </div>
        {task.showEditFields ? (
          <div>
            <button
              onClick={() => {
                this.handleChange('toDo');
              }}
            >
              toDo
            </button>
            <button
              onClick={() => {
                this.handleChange('inProgress');
              }}
            >
              In Progress
            </button>
            <button
              onClick={() => {
                this.handleChange('completed');
              }}
            >
              completed
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </section>
    );
  }
}

export default Task;
