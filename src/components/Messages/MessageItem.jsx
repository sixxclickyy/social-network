import styles from "./Message.module.css";
import { NavLink } from "react-router-dom";


const MessageItem = (props) => {
    return (
      <NavLink to={"/messages/" + props.id} className={styles.item}>
        {props.name}
      </NavLink>
    );
  };

export default MessageItem;