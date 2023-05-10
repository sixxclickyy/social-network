import React from "react";
import Post from "./Post";
import { NavLink } from "react-router-dom";
import { addPosatActionCreator, onChangeActionCreator } from '../../../redux/contentReduser';

const Posts = (props) => {
  let newPosts = props.posts.map((p) => <Post posts={p.posts} like={p.like} />);

  let newPost = React.createRef();
  let AddPost = () => { 
    props.dispatch(addPosatActionCreator());
  };

  let onChange = () => {
    let text = newPost.current.value;
    props.dispatch(onChangeActionCreator(text));
  }
  return (
    <div>
      <div className="post-news">
        <form action="post" className="form-posts">
          <h3>My posts</h3>
          <div className="post-submit">
            <input
              type="text"
              className="posts"
              name="posts"
              placeholder="What's new do you have?"
              ref={newPost}
              value={props.NewPostText}
              onChange={onChange}
            />
            <NavLink to="/content">
              <input
                type="submit"
                className="submit"
                value="Send"
                onClick={AddPost}
              ></input>
            </NavLink>
          </div>
        </form>
      </div>
      {newPosts}
    </div>
  );
};

export default Posts;
