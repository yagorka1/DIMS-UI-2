import React from 'react';
import style from '../../../style/post.module.css';
import style_button from '../../../style/button.module.css';

import Button from './Button';
import Palette from './Palette';
import titleImg from '../../../assets/images/main/main/L1.png';
import hightArrow from '../../../assets/images/main/main/up.svg';
import lowArrow from '../../../assets/images/main/main/down.svg';
import colors from '../../../js/color';

import { getDatePost } from '../../../js/getDate';
import { USER, ADMIN, MENTOR } from '../../../js/roles';

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
    const name = 'newTask';
    this.props.onChange(name, e.target.value);
  }
  handleChange1(e) {
    const name = 'newTrack';
    this.props.onChange(name, e.target.value);
  }
  showEditButtons = () => {
    this.props.changePost(this.props.task.taskId, `showEditField`);
  };

  setBackgroundColor(task) {
    return {
      backgroundColor: task.backgroundColorPost,
    };
  }

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
            {task.priority === 'Hight' ? (
              <img src={hightArrow} className={style.arrow} alt='up' />
            ) : (
              <></>
            )}
            {task.priority === 'Low' ? (
              <img src={lowArrow} className={style.arrow} alt='up' />
            ) : (
              <></>
            )}
            {getDatePost(task.startDate)}
          </div>
          <div className={style.messageBlock}>
            <div className={style.message}>
              <h4 className={style.postTitle}>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <div className={style.blockFunction}>
              <button
                className={style_button.buttonFunction}
                onClick={this.showEditButtons}
              >
                {' '}
                showEdit{' '}
              </button>
              {task.showEditField && (
                <div className={style.postButtons}>
                  {(this.props.role === ADMIN ||
                    this.props.role === MENTOR) && (
                    <div>
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
                      {task.showChangeTaskField && (
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
                      )}
                    </div>
                  )}
                  <Button
                    title='color'
                    changePost={this.props.changePost}
                    id={task.taskId}
                  />
                  {task.chooseColorField && (
                    <div className={style.palette}>
                      {colors.map((color) => (
                        <Palette
                          color={color}
                          changePost={this.props.changePost}
                          id={task.taskId}
                        />
                      ))}
                    </div>
                  )}
                  {this.props.role === USER && (
                    <div>
                      <Button
                        title='track'
                        changePost={this.props.changePost}
                        id={task.taskId}
                      />
                      {task.showTrackField && (
                        <div>
                          <input
                            value={this.props.newTrack}
                            onChange={this.handleChange1}
                          />
                          <button
                            title='pushTrack'
                            onClick={() =>
                              this.pushTrack(task.taskId, task.title)
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
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
