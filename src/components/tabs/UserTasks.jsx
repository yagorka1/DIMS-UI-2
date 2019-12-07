import React from 'react';
import style from '../../style/user-progress.module.css';
import getTasks from '../../js/tasks';
import Tasks from './Tasks/Tasks';

class UserTasks extends React.Component {
  render() {
    const id = this.props.match.params.userId;
    const tasks = getTasks(id);

    return (
      <div className={style.main}>
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default UserTasks;
