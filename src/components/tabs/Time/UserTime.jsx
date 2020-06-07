import React from 'react';
import getTasks from '../../../js/tasks';
import Time from './Time';
import { getUser } from '../../../js/users';

class UserTime extends React.Component {
  render() {
    const id = this.props.match.params.userId;
    const tasks = getTasks(id);
    const user = getUser(id);

    return <Time tasks={tasks} user={user} />;
  }
}

export default UserTime;
