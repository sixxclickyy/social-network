import styles from "./Message.module.css";

const Person = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.person}>
        <img src="" alt="" />
      </div>
      <div className={styles.message}>{props.item}</div>
    </div>
  );
};

export default Person;