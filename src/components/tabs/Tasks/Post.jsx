import React from 'react';
import style from '../../../style/Post.module.css';
import style_button from '../../../style/Button.module.css';

import Button from './Button';
import Palette from './Palette';
import titleImg from '../../../assets/images/main/main/L1.png';
import hightArrow from '../../../assets/images/main/main/up.svg';
import lowArrow from '../../../assets/images/main/main/down.svg';
import checked from '../../../assets/images/main/main/checked.svg';
import colors from '../../../js/color';

import { getDatePost } from '../../../js/getDate';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  pushTrack = (projectId, projectTitle) => {
    this.props.addTrack(projectId, projectTitle);
  };

  handleChange(e) {
    const name = 'newDescriptionEdit';
    this.props.onChange(name, e.target.value);
  }
  handleChange1(e) {
    const name = 'newTrack';
    this.props.onChange(name, e.target.value);
  }
  showEditButtons(id) {
    this.props.changePost(id, `showEditField`);
  }

  setBackgroundColor(task) {
    return {
      backgroundColor: task.backgroundColorPost,
    };
  }

  render() {
    const task = this.props.task;
    return (
      <div className={style.task} style={this.setBackgroundColor(task)}>
        <div className={style.userPhotoBlock}>
          <img src={titleImg} className={style.titleImg} alt='user' />
        </div>
        <div className={style.postBody}>
          <div className={style.informAboutPost}>
            {task.priority}
            {task.priority === 'Hight' ? (
              <img src={hightArrow} className={style.arrow} alt='up' />
            ) : (
              <div></div>
            )}
            {task.priority === 'Low' ? (
              <img src={lowArrow} className={style.arrow} alt='up' />
            ) : (
              <div></div>
            )}
            {getDatePost(task.startDate)}
            {task.status ? (
              <div className={style.checked}>
                <img
                  src={checked}
                  className={style.checkedPhoto}
                  alt='task completed'
                />
                completed
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className={style.messageBlock}>
            <div className={style.message}>
              <h4 className={style.postTitle}>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <div className={style.blockFunction}>
              <div
                role='button'
                onKeyPress={() => {}}
                tabIndex='0'
                className={style_button.buttonFunction}
                onClick={() => {
                  this.showEditButtons(task.taskId);
                }}
              ></div>
              {task.showEditField ? (
                <div className={style.postButtons}>
                  <Button
                    title='changeStatus'
                    changePost={this.props.changePost}
                    id={task.taskId}
                  />
                  <Button
                    title='delete'
                    changePost={this.props.changePost}
                    id={task.taskId}
                  />
                  <Button
                    title='edit'
                    changePost={this.props.changePost}
                    id={task.taskId}
                  />
                  {task.showChangeTaskField ? (
                    <div>
                      <input
                        value={this.props.newTask}
                        onChange={this.handleChange}
                      />
                      <Button
                        title='push'
                        changePost={this.props.changePost}
                        id={task.taskId}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    title='color'
                    changePost={this.props.changePost}
                    id={task.taskId}
                  />
                  {task.chooseColorField ? (
                    <div className={style.palette}>
                      {colors.map((color) => (
                        <Palette
                          color={color}
                          changePost={this.props.changePost}
                          id={task.taskId}
                        />
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    title='track'
                    changePost={this.props.changePost}
                    id={task.taskId}
                  />
                  {task.showTrackField ? (
                    <div>
                      <input
                        value={this.props.newTrack}
                        onChange={this.handleChange1}
                      />
                      <button
                        title='pushTrack'
                        onClick={() => this.pushTrack(task.taskId, task.title)}
                        id={task.taskId}
                      >
                        push
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
