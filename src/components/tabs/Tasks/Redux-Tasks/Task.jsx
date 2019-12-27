import React from 'react';
import Button from './Button';
import Palette from './Palette';
import colors from '../../../../js/color';

import style from '../../../../style/post.module.css';
import titleImg from '../../../../assets/images/main/main/L1.png';

import { getDatePost } from '../../../../js/getDate';
import { USER, ADMIN, MENTOR } from '../../../../js/roles';
import InputText from './InputText';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  setBackgroundColor(task) {
    return {
      backgroundColor: task.backgroundColorPost,
    };
  }

  handleChange = (e) => {
    this.props.changeTrack(e.target.value);
  };

  render() {
    const { task } = this.props;

    return (
      <div className={style.task} style={this.setBackgroundColor(task)}>
        <div className={style.userPhotoBlock}>
          <img src={titleImg} className={style.titleImg} alt='user' />
        </div>
        <div className={style.postBody}>
          <div className={style.informAboutPost}>
            {task.priority}
            {getDatePost(task.startDate)}
          </div>
          <div className={style.messageBlock}>
            <div className={style.message}>
              <h4 className={style.postTitle}>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <div className={style.blockFunction}>
              <div className={style.postButtons}>
                {(this.props.role === ADMIN || this.props.role === MENTOR) && (
                  <div>
                    <Button
                      title='delete'
                      changePost={this.props.deleteTask}
                      id={task.taskId}
                    />
                    <Button
                      title='edit'
                      changePost={this.props.showEditField}
                      id={task.taskId}
                    />
                    {task.showChangeTaskField && (
                      <div>
                        <InputText
                          value={this.props.newTask}
                          handleInputChange={this.props.changeTask}
                          type='text'
                          name='newTask'
                        />
                        <Button
                          title='push'
                          changePost={this.props.pushEditTask}
                          id={task.taskId}
                        />
                      </div>
                    )}
                  </div>
                )}
                <Button
                  title='color'
                  changePost={this.props.showEditField}
                  id={task.taskId}
                />
                {task.chooseColorField && (
                  <div className={style.palette}>
                    {colors.map((color) => (
                      <Palette
                        color={color}
                        changePost={this.props.chooseColor}
                        id={task.taskId}
                      />
                    ))}
                  </div>
                )}
                {this.props.role === USER && (
                  <div>
                    <Button
                      title='track'
                      changePost={this.props.showEditField}
                      id={task.taskId}
                    />
                    {task.showTrackField && (
                      <div>
                        <input
                          value={this.props.newTrack}
                          onChange={this.handleChange}
                        />
                        <button
                          title='pushTrack'
                          onClick={() =>
                            this.props.pushTrack(
                              task.taskId,
                              task.title,
                              task.userId,
                            )
                          }
                          id={task.taskId}
                        >
                          push
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
