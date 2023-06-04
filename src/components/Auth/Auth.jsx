import { Form, Formik, Field, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import style from "./Auth.module.css";

const Auth = (props) => {
  return (
    <div className={style.main}>
      <h1>Auth</h1>
      <ValidationSchemaExample />
    </div>
  );
};

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too short password! Min 5 words")
    .max(50, "Too long password! Max 50 words")
    .required("Main field"),
  email: Yup.string().email("Wrong email!").required("Main Field"),
});

export const ValidationSchemaExample = () => (
  <div className={style.container}>
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={style.formContainer}>
          <label htmlFor="email" className={style.InputLabel}>
            Email Address
          </label>
          <Field name="email" type="email" className={style.item} />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <label htmlFor="email" className={style.InputLabel}>
            Password
          </label>
          <Field name="password" type="password" className={style.item} />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          {/* <label htmlFor="email" className={style.InputLabel}>
            Email Address
          </label>
          <Field name="firstName" className={style.item} />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <label htmlFor="email" className={style.InputLabel}>
            Email Address
          </label>
          <Field name="lastName" className={style.item} />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null} */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Auth;
