import React from "react";
import Posts from "./Posts";
import { NavLink } from "react-router-dom";
import {
  addPosatActionCreator,
  onChangeActionCreator,
} from "../../../redux/contentReduser";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    NewPostText: state.profilePage.NewPostText  
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPosatActionCreator());
    },
    ChangeInputText: (text) => {
      dispatch(onChangeActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
