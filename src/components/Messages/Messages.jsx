import styles from "./Message.module.css";
import React from "react";
import MessageItem from "./MessageItem";
import Person from "./Person";

const Messages = (props) => {
  let state = props.messagePage;

  let newMessages = state.messages.map((m) => <Person text={m.text} key={m.id} />);
  let newPeops = state.people.map((p) => <MessageItem name={p.name} id={p.id} key={p.id}/>);

  let newMessageText = state.newMessageText;

  let MessagePost = () => {
    props.newPostMessage();
  };

  let onChange = (e) => {
    let text = e.target.value;
    props.onChange(text)
  }

  return (
    <div className={styles.container}>
      <div className={styles.dilogs}>
        <p>{newPeops} </p>
      </div>
      <div className={styles.messages}>
        <p className={styles.newMessage}>{newMessages}</p>
        <textarea
          value={newMessageText}
          onChange={onChange}
        />
        <button onClick={MessagePost}>Add message</button>
      </div>
    </div>
  );
};

export default Messages;
