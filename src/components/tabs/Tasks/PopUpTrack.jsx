import React from 'react';
import style from '../../../style/pop-up.module.css';
import InputText from '../../InputText';
import { getUsers, getMembers } from '../../../js/users';
import TimeField from 'react-simple-timefield';

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
        <div className={style.header}> Добавить новый трек </div>
        <form className={style.conten1t}>
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
          {/*<InputText*/}
          {/*  label='Spent time'*/}
          {/*  value={this.props.newTimeTrack}*/}
          {/*  handleInputChange={this.handleInputChange}*/}
          {/*  type='text'*/}
          {/*  name='newTimeTrack'*/}
          {/*/>*/}
          <div>
            <label htmlFor='time'>Время: </label>
            <TimeField
              value={this.props.newTimeTrack}
              onChange={(event, value) =>
                this.handleInputChange('newTimeTrack', value)
              }
            />
          </div>

          <button
            title='pushTrack'
            onClick={() =>
              this.pushTrack(this.props.task.taskId, this.props.task.title)
            }
            id={this.props.task.taskId}
          >
            push
          </button>
          {/*<input type='button' onClick={this.pushTrack} value='Save' />*/}
        </form>
      </div>
    );
  }
}

export default PopUpTrack;
