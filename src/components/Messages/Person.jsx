import styles from "./Message.module.css";

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

export default Person;