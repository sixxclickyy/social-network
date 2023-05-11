import React from "react";
import Post from "./Post";
import { NavLink } from "react-router-dom";
import { addPosatActionCreator, onChangeActionCreator } from '../../../redux/contentReduser';
import Posts from "./Posts";

const PostsContainer = (props) => {
    debugger;
    let state = props.store.getState();
  let AddPost = () => { 
    props.store.dispatch(addPosatActionCreator());
  };

  let onChange = (text) => {
    let action = onChangeActionCreator(text);
    props.store.dispatch(action);
  }
  return (
    <Posts ChangeInputText={onChange} addPost={AddPost} posts={state.contentPage.posts} NewPostText={state.contentPage.NewPostText}/>
  );
};

export default PostsContainer;
