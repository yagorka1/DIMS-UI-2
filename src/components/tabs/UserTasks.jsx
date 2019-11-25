import React from 'react';
import style from '../../style/UserProgress.module.css';
import getProjects from '../../js/projects';
import Tasks from './Tasks/Tasks';

class UserTasks extends React.Component {
  getId() {
    const str = window.location.pathname;
    return str.slice(12, str.length);
  }

  render() {
    const id = this.getId();
    const tasks = getProjects(id);

    return (
      <div className={style.main}>
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default UserTasks;
