import React from 'react';
import style from '../../style/task.module.css';
import task_photo from '../../assets/images/main/task.png';
import clock_offline from '../../assets/images/main/clock_offline.svg';
import clock_outline from '../../assets/images/main/clock-outline.svg';
import { getTime, getDeadlineStatus } from '../../js/checkTimeOfTask';
import Button from './Tasks/Button';

class Task extends React.Component {
  handleChange = (action) => {
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
        <Button
          title='showEditFields'
          changePost={this.props.changePost}
          id={task.taskId}
        />
        {task.showEditFields ? (
          <div>
            <Button
              title='toDo'
              changePost={this.props.changePost}
              id={task.taskId}
            />
            <Button
              title='inProgress'
              changePost={this.props.changePost}
              id={task.taskId}
            />
            <Button
              title='completed'
              changePost={this.props.changePost}
              id={task.taskId}
            />
          </div>
        ) : (
          <></>
        )}
      </section>
    );
  }
}

export default Task;
