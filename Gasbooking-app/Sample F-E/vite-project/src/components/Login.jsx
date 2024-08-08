import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
const navigate =useNavigate();
  const{ login } =useContext(AuthContext);
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required')
  });

  // Initial values for the form fields
  const initialValues = {
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = async(values) => {
    // Handle form submission, e.g., send data to the server
    try {
      console.log('Form data', values);
    login(values);
    navigate("/home");
    } catch (error) {
      console.log(error)
    }
    

  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
