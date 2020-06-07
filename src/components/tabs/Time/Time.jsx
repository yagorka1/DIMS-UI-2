import React from 'react';
import style from '../../../style/Time.module.css';
import { USER } from '../../../js/roles';
import getTasks from '../../../js/tasks';
import { getAllTasks } from '../../../js/allTasks';
import { getTracks } from '../../../js/tracks';
import { getTimeTask } from '../../../js/getDate';
import { Pie } from 'react-chartjs';
import Button from '../Users/Button';
import arrow from '../../../assets/images/main/main/arrow.png';
import { getUser } from '../../../js/users';

var arrMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Ноябрь',
  'Декабрь',
];

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth() + 1,
    };
    this.setDay();
  }

  setDay() {
    const date = new Date(this.state.month + '-1-' + new Date().getFullYear());
    const allDays = this.getDaysInMonth(date.getMonth(), date.getFullYear());
    this.setState({ allDays: allDays.filter((item) => item) });
    this.state = {
      month: new Date().getMonth() + 1,
      allDays,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // let tasks;
    //
    // props.role === USER
    //   ? (tasks = getTasks(props.email))
    //   : (tasks = getAllTasks());
    //
    // const tracks = getTracks(props.email);
    //
    // return { tasks, tracks };

    let tasks = [];
    let tracks = [];

    if (!props?.tasks) {
      props.role === USER
        ? (tasks = getTasks(props.email))
        : (tasks = getAllTasks());
      tracks = getTracks(props.email);
    } else {
      tasks = props.tasks;
      tracks = getTracks(props.user.email);
    }

    return { tasks, tracks };
  }

  getChartData(first, second) {
    return [
      {
        value: first,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'Отработано',
      },
      {
        value: second * 8 * 60,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Осталось отработать',
      },
    ];
  }

  getDaysInMonth(month, year) {
    // month--; // lets fix the month once, here and be done with it
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      // Exclude weekends
      var tmpDate = new Date(date);
      var weekDay = tmpDate.getDay(); // week day
      var day = tmpDate.getDate(); // day

      // if (weekDay%6) { // exclude 0=Sunday and 6=Saturday
      //   days.push(day);
      // }

      days.push({ day: day, showTask: false });

      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  getWorkDaysInMonth(month, year) {
    // month--; // lets fix the month once, here and be done with it
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      // Exclude weekends
      var tmpDate = new Date(date);
      var weekDay = tmpDate.getDay(); // week day
      var day = tmpDate.getDate(); // day

      if (weekDay % 6) {
        // exclude 0=Sunday and 6=Saturday
        days.push(day);
      }

      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  getHoursInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      // Exclude weekends
      var tmpDate = new Date(date);
      var weekDay = tmpDate.getDay(); // week day
      var day = tmpDate.getDate(); // day

      if (weekDay % 6) {
        // exclude 0=Sunday and 6=Saturday
        days.push(day);
      }

      date.setDate(date.getDate() + 1);
    }

    return days.length;
  }

  getSpentTime(day, month) {
    const str = month + '-' + day + '-' + new Date().getFullYear();
    const date = new Date(str);
    const tracks = this.state.tracks.filter(
      (track) =>
        track.trackDate.getDate() === date.getDate() &&
        track.trackDate.getFullYear() === date.getFullYear() &&
        track.trackDate.getMonth() === date.getMonth(),
    );
    let minutes = 0;
    tracks.map((tracks) => (minutes += tracks.timeOnTrack));
    return getTimeTask(minutes);
  }

  getTaskOnDay(day, month) {
    const str = month + '-' + day + '-' + new Date().getFullYear();
    const date = new Date(str);
    const tracks = this.state.tracks.filter(
      (track) =>
        track.trackDate.getDate() === date.getDate() &&
        track.trackDate.getFullYear() === date.getFullYear() &&
        track.trackDate.getMonth() === date.getMonth(),
    );
    const tasks = [];
    let flag = 0;
    for (let i = 0; i < tracks.length; i++) {
      flag = 0;
      for (let j = 0; j < tasks.length; j++) {
        if (tracks[i].taskId === tasks[j].id) {
          tasks[j].time = tasks[j].time + tracks[i].timeOnTrack;
          flag++;
        }
      }

      if (flag === 0) {
        tasks.push({
          name: tracks[i].taskName,
          id: tracks[i].taskId,
          time: tracks[i].timeOnTrack,
        });
      }
    }

    return tasks;
  }

  getSpentTimeMonth(month) {
    const str = month + '-' + '1' + '-' + new Date().getFullYear();
    const date = new Date(str);
    const tracks = this.state.tracks.filter(
      (track) =>
        track.trackDate.getFullYear() === date.getFullYear() &&
        track.trackDate.getMonth() === date.getMonth(),
    );
    let minutes = 0;
    tracks.map((tracks) => (minutes += tracks.timeOnTrack));
    return minutes;
  }

  getDataString(day, month) {
    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    return day + '/' + month;
  }

  stayWork(allDays, workMin) {
    const notWorkMin = allDays * 60 * 8 - workMin;
    return getTimeTask(notWorkMin);
  }

  prevMonth(month) {
    this.setState({ month: month - 1 });
  }

  nextMonth(month) {
    this.setState({ month: month + 1 });
  }

  checkWorkDay(day, workDays) {
    const findDay = workDays.find((item) => item === day);
    return findDay ? 'Нужно отработать 8 часов' : 'Выходной день';
  }

  showTask(allDays, day) {
    allDays[day].showTask = !allDays[day].showTask;
    this.setState({ allDays });
  }

  getUserName() {
    if (this.props.user) {
      return this.props.user.name + ' ' + this.props.user.lastName;
    } else {
      const user = getUser(this.props.email);
      return user.name + ' ' + user.lastName;
    }
  }

  render() {
    const date = new Date(this.state.month + '-1-' + new Date().getFullYear());
    // const allDays = this.getDaysInMonth(date.getMonth(), date.getFullYear());
    // this.setState({ allDays })
    const workDays = this.getWorkDaysInMonth(
      date.getMonth(),
      date.getFullYear(),
    );
    const user = getUser(this.props.email);

    return (
      <div className={style.timeWrapper}>
        <div className={style.xxx}>
          <div className={style.timeWrapper2}>
            <div className={style.buttonws}>
              <div className={style.buttons}>
                <button
                  className={style.button}
                  onClick={() => this.prevMonth(this.state.month)}
                >
                  Предыдущий месяц
                </button>
                {arrMonth[this.state.month - 1]}
                <button
                  className={style.button}
                  onClick={() => this.nextMonth(this.state.month)}
                >
                  Следующий месяц
                </button>
              </div>

              <span className={style.userName}>
                Пользователь: {this.getUserName()}
              </span>
            </div>
            {this.state.allDays.map((day, index) => (
              <div>
                <div className={style.dayInfo}>
                  <div className={style.data}>
                    {this.getDataString(day.day, this.state.month)}
                  </div>
                  <span>
                    Отработано времени:{' '}
                    {this.getSpentTime(day.day, this.state.month)}
                  </span>
                  <span
                    className={style.showB}
                    onClick={() => this.showTask(this.state.allDays, index)}
                  >
                    <img src={arrow} className={style.img} alt='Save' />
                  </span>
                  <span className={style.workTime}>
                    {this.checkWorkDay(day.day, workDays)}
                  </span>
                </div>
                {day.showTask ? (
                  <div className={style.result}>
                    {this.getTaskOnDay(day.day, this.state.month).map(
                      (task) => (
                        <div>
                          {task.name}: {getTimeTask(task.time)}
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          <div>
            <div className={style.statistics}>
              <p>
                Нужно отработать за месяц:{' '}
                {this.getHoursInMonth(date.getMonth(), date.getFullYear())} д (
                {this.getHoursInMonth(date.getMonth(), date.getFullYear()) * 8}{' '}
                ч)
              </p>
              <p>
                Отработано за месяц:{' '}
                {getTimeTask(this.getSpentTimeMonth(this.state.month))} /{' '}
                {this.getHoursInMonth(date.getMonth(), date.getFullYear()) * 8}{' '}
                ч
              </p>
              <p>
                Осталось отработать:{' '}
                {this.stayWork(
                  this.getHoursInMonth(date.getMonth(), date.getFullYear()),
                  this.getSpentTimeMonth(this.state.month),
                )}
              </p>
            </div>
            <div>
              <Pie
                data={this.getChartData(
                  this.getSpentTimeMonth(this.state.month),
                  this.getHoursInMonth(date.getMonth(), date.getFullYear()),
                )}
                options={{
                  title: 'cool pie chart',
                  text: 'coolest data',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Time;
