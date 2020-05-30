import React from 'react';
import style from '../../../style/pop-up.module.css';
import InputText from '../../InputText';
import DatePicker from 'react-date-picker';
import { getUsers, getMembers } from '../../../js/users';

class PopUpTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checkedUsers: [],
    };
  }
  componentDidMount() {
    const users = getUsers();
    this.setState({ users });
  }

  handleInputChange = (name, value) => {
    this.props.onChange(name, value);
  };

  pushTrack = (projectId, projectTitle) => {
    this.props.addTrack(projectId, projectTitle);
  };

  render() {
    const { close } = this.props;

    const members = getMembers();
    return (
      <div className={style.modal}>
        <a className={style.close} onClick={close}>
          &times;
        </a>
        <div className={style.header}> Add new task </div>
        <form className={style.content}>
          <div>
            {/*<input*/}
            {/*  value={this.props.newTrack}*/}
            {/*  onChange={this.handleInputChange}*/}
            {/*/>*/}
            <InputText
              label='Track'
              value={this.props.newTrack}
              handleInputChange={this.handleInputChange}
              type='text'
              name='newTrack'
            />
            <InputText
              label='Spent time'
              value={this.props.newTimeTrack}
              handleInputChange={this.handleInputChange}
              type='text'
              name='newTimeTrack'
            />
            <button
              title='pushTrack'
              onClick={() =>
                this.pushTrack(this.props.task.taskId, this.props.task.title)
              }
              id={this.props.task.taskId}
            >
              push
            </button>
          </div>
          {/*<input type='button' onClick={this.pushTrack} value='Save' />*/}
        </form>
      </div>
    );
  }
}

export default PopUpTrack;
