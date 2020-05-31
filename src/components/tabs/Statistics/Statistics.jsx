import React from 'react';
import style from '../../../style/Statistics.module.css';
import { USER } from '../../../js/roles';
import getTasks from '../../../js/tasks';
import { getAllTasks } from '../../../js/allTasks';
import { getTracks } from '../../../js/tracks';
import { getUsers } from '../../../js/users';
import { Pie } from 'react-chartjs';
import { getDatePost, getTimeTask } from '../../../js/getDate';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskState: 'todo',
      currentTasks: [],
      totalTime: 0,
      spentTime: 0,
      moreTime: 0,
    };
  }

  getTask(tasks, name) {
    const newTasks = tasks.filter((task) => task.state === name);
    return newTasks;
  }

  static getDerivedStateFromProps(props, state) {
    let tasks;
    props.role === USER
      ? (tasks = getTasks(props.email))
      : (tasks = getAllTasks());
    return { tasks };
  }

  getChartData() {
    return [
      {
        value: this.getTask(this.state.tasks, 'toDo').length,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'TO DO',
      },
      {
        value: this.getTask(this.state.tasks, 'inProgress').length,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'IN PROGRESS',
      },
      {
        value: this.getTask(this.state.tasks, 'completed').length,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'COMPLETED',
      },
    ];
  }

  getAllTime(tasks) {
    let sum = 0;
    tasks.forEach((task) => (sum += Number(task.timeOnTask)));
    return getTimeTask(sum);
  }

  getSpentTime(tasks) {
    let sum = 0;
    tasks.forEach((task) => (sum += Number(task.spentTime)));
    return getTimeTask(sum);
  }

  getMoreTime(tasks) {
    let sum = 0;
    tasks.forEach((task) => {
      if (task.spentTime < task.timeOnTask) {
        sum += Number(task.timeOnTask) - Number(task.spentTime);
      }
    });

    return getTimeTask(sum);
  }

  getOstTime(tasks) {
    let sum = 0;
    tasks.forEach((task) => {
      if (task.spentTime < task.timeOnTask) {
        sum += Number(task.timeOnTask) - Number(task.spentTime);
      }
    });

    return sum;
  }

  changeTaskState(tasks) {
    this.setState({
      currentTasks: tasks,
      totalTime: this.getAllTime(tasks),
      spentTime: this.getSpentTime(tasks),
      moreTime: this.getMoreTime(tasks),
    });
  }

  getTime(task) {
    if (task.timeOnTask - task.spentTime > 0) {
      return getTimeTask(task.timeOnTask - task.spentTime);
    } else {
      return `Потрачено на ${getTimeTask(
        task.spentTime - task.timeOnTask,
      )} больше`;
    }
  }

  render() {
    const tasks = this.state.tasks;
    const toDoTask = this.getTask(tasks, 'toDo');
    const inProgressTask = this.getTask(tasks, 'inProgress');
    const completedTask = this.getTask(tasks, 'completed');

    return (
      <div className={style.projects_container}>
        <h2>Статистика по всем задачам</h2>
        <div className={style.task_stats}>
          <div>
            <p>Количество задач всего: {tasks.length}</p>
            <p>Количество задач в ToDo: {toDoTask.length}</p>
            <p>Количество задач в In Progress: {inProgressTask.length}</p>
            <p>Количество задач в Completed Task: {completedTask.length}</p>
          </div>

          <div>
            <Pie
              data={this.getChartData()}
              options={{
                title: 'cool pie chart',
                text: 'coolest data',
              }}
            />
          </div>
        </div>

        <h2>Статистика времени</h2>
        <div className={style.task_stats}>
          <div>
            <p>Отведенное время на задачи: {this.getAllTime(tasks)}</p>
            <p>Потраченное время на задачи: {this.getSpentTime(tasks)}</p>
          </div>
        </div>

        <h2>Задачи</h2>
        <div>
          <input
            type='radio'
            id='contactChoice'
            name='contact'
            value='ddd'
            onClick={() => this.changeTaskState(tasks)}
          />
          <label htmlFor='contactChoice'>Все задачи</label>

          <input
            type='radio'
            id='contactChoice1'
            name='contact'
            value='email'
            onClick={() => this.changeTaskState(toDoTask)}
          />
          <label htmlFor='contactChoice1'>ToDo</label>

          <input
            type='radio'
            id='contactChoice2'
            onClick={() => this.changeTaskState(inProgressTask)}
            name='contact'
            value='phone'
          />
          <label htmlFor='contactChoice2'>In Progress</label>

          <input
            type='radio'
            id='contactChoice3'
            onClick={() => this.changeTaskState(completedTask)}
            name='contact'
            value='mail'
          />
          <label htmlFor='contactChoice3'>Completed</label>
        </div>
        <div className={style.taskss}>
          <div className={style.task}>
            <div className={style.task_title}>Задача</div>
            <div className={style.task_title}>Планируемое время</div>
            <div className={style.task_title}>Потраченое время</div>
            <div className={style.task_title}>Осталось времени</div>
            <div className={style.task_title}>Дата дедлайна</div>
          </div>
          {this.state.currentTasks.map((task) => (
            <div className={style.task}>
              <div className={style.task_title}>{task.title}</div>
              <div className={style.task_title}>
                {getTimeTask(task.timeOnTask)}
              </div>
              <div className={style.task_title}>
                {getTimeTask(task.spentTime)}
              </div>
              <div className={style.task_title}>{this.getTime(task)}</div>
              <div className={style.task_title}>
                {getDatePost(task.deadlineDate)}
              </div>
            </div>
          ))}
          <div className={style.task2}>
            <div className={style.task_title}>Итог</div>
            <div className={style.task_title}>{this.state.totalTime}</div>
            <div className={style.task_title}>{this.state.spentTime}</div>
            <div className={style.task_title}>{this.state.moreTime}</div>
            <div className={style.task_title}>
              {/*{getDatePost(task.deadlineDate)}*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
