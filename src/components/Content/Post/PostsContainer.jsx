import React from "react";
import { addPosatActionCreator, onChangeActionCreator } from '../../../redux/contentReduser';
import Posts from "./Posts";

const PostsContainer = (props) => {
  let AddPost = () => { 
    props.store.dispatch(addPosatActionCreator());
  };

  let onChange = (text) => {
    let action = onChangeActionCreator(text);
    props.store.dispatch(action);
  }
  return (
    <Posts ChangeInputText={onChange} addPost={AddPost} posts={props.posts}/>
  );
};

export default PostsContainer;
