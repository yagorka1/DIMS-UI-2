import React from 'react';
import style from '../../style/Task.module.css';
import task_photo from '../../assets/images/main/task.png';
import clock from '../../assets/images/main/clock_offline.svg';
import menu from '../../assets/images/main/menu.svg';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  getTime() {
    return '5 days delays';
  }

  render() {
    const task = this.props.task;
    return (
      <section className={style.task}>
        <img src={task_photo} className={style.task_photo} alt='task_photo' />
        <div className={style.task_inf}>
          <h3 className={style.title_task}>{task.name}</h3>
          <div className={style.deadline_time_container}>
            <img className={style.clock_image} src={clock} alt='image_clock' />
            {this.getTime(task)}
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
