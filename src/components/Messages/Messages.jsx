import styles from "./Message.module.css";
import MessageItem from "./MessageItem";
import Person from "./Person";
import { Navigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import React, { useState, useEffect } from "react";

const Messages = (props) => {

  // if (!props.isAuth) return <Navigate to={"/login"} />;

  let state = props.messagePage;

  let newMessages = state.messages.map((m) => (
    <Person text={m.text} key={m.id} />
  ));
  let newPeops = state.people.map((p) => (
    <MessageItem name={p.name} id={p.id} key={p.id} />
  ));


  return (
    <div className={styles.container}>
      <div className={styles.dilogs}>
        <p>{newPeops} </p>
      </div>
      <div className={styles.messages}>
        {/* <p className={styles.newMessage}>{newMessages}</p> */}
        <ValidationSchemaExample />
      </div>
    </div>
  );
};

const ValidationSchemaExample = () => {
  const handleSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Получение сохраненных элементов из localStorage при загрузке компонента
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      localStorage.clear();
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    // Сохранение элементов в localStorage при изменении массива items
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setItems([...items, inputText]);
    setInputText("");
  };

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        {items.map((item, index) => (
          <Person item={item} key={index} /> // добавлено key для каждого элемента
        ))}
        <Field
          name="text"
          placeholder="Write a message..."
          component="textarea"
          onChange={handleChange}
          value={inputText}
        />

        <button type="button" onClick={handleButtonClick}>
          Send 
        </button>
      </Form>
    </Formik>
  );
};

export default Messages;
