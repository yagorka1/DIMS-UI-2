import React from 'react';
import style from '../../../style/Post.module.css';
import Button from './Button';
import Palette from './Palette';
import titleImg from '../../../assets/images/main/main/L1.png';
import hightArrow from '../../../assets/images/main/main/up.svg';
import lowArrow from '../../../assets/images/main/main/down.svg';
import checked from '../../../assets/images/main/main/checked.svg';
import {
  PINK_COLOR,
  YELLOW_COLOR,
  GREEN_COLOR,
  ORANGE_COLOR,
  VIOLET_COLOR,
  PURPLE_COLOR,
  PEACH_COLOR,
  AQUA_COLOR,
  BLUE_COLOR,
} from '../../../js/color';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = 'newDescriptionEdit';
    this.props.onChange(name, e.target.value);
  }
  showEditButtons(id) {
    this.props.changePost(id, `showEditField`);
  }

  setBackgroundColor(post) {
    return {
      backgroundColor: post.backgroundColorPost,
    };
  }

  render() {
    const post = this.props.post;
    return (
      <div className={style.post} style={this.setBackgroundColor(post)}>
        <div className={style.userPhotoBlock}>
          <img src={titleImg} className={style.titleImg} alt='user' />
        </div>
        <div className={style.postBody}>
          <div className={style.informAboutPost}>
            {post.priority}
            {post.priority === 'Hight' ? (
              <img src={hightArrow} className={style.arrow} alt='up' />
            ) : (
              <div></div>
            )}
            {post.priority === 'Low' ? (
              <img src={lowArrow} className={style.arrow} alt='up' />
            ) : (
              <div></div>
            )}
            {/* {post.date[0]} */}
            {post.status ? (
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
              <h4 className={style.postTitle}>{post.title}</h4>
              <p>{post.description}</p>
            </div>
            <div className={style.blockFunction}>
              <div
                className={style.buttonFunction}
                onClick={() => {
                  this.showEditButtons(post.taskId);
                }}
              ></div>
              {post.showEditField ? (
                <div className={style.postButtons}>
                  <Button
                    title='changeStatus'
                    changePost={this.props.changePost}
                    id={post.taskId}
                  />
                  <Button
                    title='delete'
                    changePost={this.props.changePost}
                    id={post.taskId}
                  />
                  <Button
                    title='edit'
                    changePost={this.props.changePost}
                    id={post.taskId}
                  />
                  {post.showChangeTaskField ? (
                    <div>
                      <input
                        value={this.props.newTask}
                        onChange={this.handleChange}
                      />
                      <Button
                        title='push'
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    title='color'
                    changePost={this.props.changePost}
                    id={post.taskId}
                  />
                  {post.chooseColorField ? (
                    <div className={style.palette}>
                      <Palette
                        color={PINK_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={YELLOW_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={GREEN_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={ORANGE_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={VIOLET_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={PURPLE_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={PEACH_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={AQUA_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
                      <Palette
                        color={BLUE_COLOR}
                        changePost={this.props.changePost}
                        id={post.taskId}
                      />
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
