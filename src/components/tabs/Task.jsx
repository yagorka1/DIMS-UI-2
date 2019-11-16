import React from 'react';
import style from '../../style/Task.module.css';
import task_photo from '../../assets/images/main/task.png';
import clock2 from '../../assets/images/main/clock_offline.svg';
import clock1 from '../../assets/images/main/clock-outline.svg';
import menu from '../../assets/images/main/menu.svg';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  getDeadlineStatus(deadlineDate) {
    const currentTime = new Date().getTime();
    let timeToDeadline =
      (deadlineDate.getTime() - currentTime) / 1000 / 60 / 60; // time to deadline in hours
    if (timeToDeadline > 0) return 1;
    else return 0;
  }

  getTime(deadlineDate) {
    const currentTime = new Date().getTime();
    let str = 'left';
    let timeToDeadline =
      (deadlineDate.getTime() - currentTime) / 1000 / 60 / 60; // time to deadline in hours

    if (timeToDeadline < 0) {
      str = 'delays';
      timeToDeadline = timeToDeadline * -1;
    }
    if (timeToDeadline < 24)
      return `${Math.floor(timeToDeadline)} hours ${str}`;
    timeToDeadline = timeToDeadline / 24;
    if (timeToDeadline < 30) return `${Math.floor(timeToDeadline)} days ${str}`;
    timeToDeadline = timeToDeadline / 30;
    if (timeToDeadline < 12)
      return `${Math.floor(timeToDeadline)} months ${str}`;
    timeToDeadline = timeToDeadline / 12;
    return `${Math.floor(timeToDeadline)} years ${str}`;
  }

  render() {
    const task = this.props.task;
    return (
      <section className={style.task}>
        <img src={task_photo} className={style.task_photo} alt='task_photo' />
        <div className={style.task_inf}>
          <h3 className={style.title_task}>{task.title}</h3>
          <div className={style.deadline_time_container}>
            {this.getDeadlineStatus(task.deadlineDate) ? (
              <img
                className={style.clock_image}
                src={clock2}
                alt='image_clock'
              />
            ) : (
              <img
                className={style.clock_image}
                src={clock1}
                alt='image_clock'
              />
            )}
            {this.getTime(task.deadlineDate)}
          </div>
        </div>
        <div
          role='button'
          onClick={this.handleChange}
          onKeyPress={() => {}}
          tabIndex='0'
        >
          <img src={menu} className={style.menu_image} alt='menu' />
        </div>
      </section>
    );
  }
}

export default Task;
