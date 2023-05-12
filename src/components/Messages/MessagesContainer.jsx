import { NavLink } from "react-router-dom";
import styles from "./Message.module.css";
import React from "react";
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../redux/messageReduser';
import Messages from "./Messages";

const MessagesContainer = (props) => {
  let state = props.store.getState().messagePage;

  let MessagePost = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onChange = (text) => {
    props.store.dispatch(onChangeMessageActionCreator(text));
  }

  return (
    <Messages newPostMessage={MessagePost} onChange={onChange} messagePage={state}/>
  );
};

export default MessagesContainer;
