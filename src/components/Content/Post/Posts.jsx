import React from "react";
import Post from "./Post";
import { Form, Formik, Field, useFormik } from "formik";
import * as Yup from "yup";

const Posts = (props) => {
  let newPosts = props.posts.map((p) => <Post posts={p.posts} like={p.like} key={p.id}/>);

  let newPost = React.createRef();
  let onAddPost = () => { 
    props.addPost();
  };

  let onChange = () => {
    let text = newPost.current.value;
    props.ChangeInputText(text);
  }
  return (
    <div>
      <div className="post-news">
        <form action="post" className="form-posts">
          <h3>My posts</h3>
          <div className="post-submit">
           

            <ValidationSchemaExample/>
          </div>
        </form>
      </div>
      {newPosts}
    </div>
  );
};

const SignupSchema = Yup.object().shape({
  text: Yup.string()
    .min(1, "You can't send empty message :)")
    .max(2000, "Too long text! Max 2000 symbols")
    .required("You can't send empty message :)"),
});

export const ValidationSchemaExample = (props) => (
  <div className="container">
    <Formik
      initialValues={{
        text: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      >
      {({ errors, touched }) => (
        <Form className="formContainer">
          <Field
            name="text"
            type="text"
            className="posts"
            placeholder="Write a message..."
          />
          {errors.text && touched.text ? <div>{errors.text}</div> : null}

          <button type="submit" className="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Posts;
