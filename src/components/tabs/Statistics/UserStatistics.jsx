import React from 'react';
import Statistics from './Statistics';
import getTasks from '../../../js/tasks';

class UserStatistics extends React.Component {
  render() {
    const id = this.props.match.params.userId;
    const tasks = getTasks(id);

    return <Statistics tasks={tasks} />;
  }
}

export default UserStatistics;
