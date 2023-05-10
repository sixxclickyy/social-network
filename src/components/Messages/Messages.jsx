import { NavLink } from "react-router-dom";
import styles from "./Message.module.css";
import React from "react";
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../redux/messageReduser';

const Message = (props) => {
  return (
    <NavLink to={"/messages/" + props.id} className={styles.item}>
      {props.name}
    </NavLink>
  );
};

const Person = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.person}>
        <img src="" alt="" />
        <span>Timur</span>
      </div>
      <div className={styles.message}>{props.text}</div>
    </div>
  );
};

const Messages = (props) => {
  let newMessages = props.messagePage.messages.map((m) => <Person text={m.text} />);
  let newPeops = props.messagePage.people.map((p) => <Message name={p.name} id={p.id} />);

  let newPostMessage = React.createRef();
  let MessagePost = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onChange = () => {
    let text = newPostMessage.current.value;
    props.dispatch(onChangeMessageActionCreator(text));

  }

  return (
    <div className={styles.container}>
      <div className={styles.dilogs}>
        <p>{newPeops} </p>
      </div>
      <div className={styles.messages}>
        <p className={styles.newMessage}>{newMessages}</p>
        <textarea
          ref={newPostMessage}
          value={props.messagePage.newMessageText}
          onChange={onChange}
        />
        <button onClick={MessagePost}>Add message</button>
      </div>
    </div>
  );
};

export default Messages;
