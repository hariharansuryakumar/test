import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Container} from 'react-bootstrap'
const RegisterForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .max(15, 'Username cannot exceed 15 characters')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  });

  // Initial values for the form fields
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Handle form submission
  const handleSubmit = (values) => {
    // Handle form submission, e.g., send data to the server
    console.log('Form data', values);
  };

  return (
    <Container className ='box-effect mt-4'>
      <h1 className='text-center'>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label> <br />
            <Field
              type="text"
              id="username"
              name="username"
              className='w-100'
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label> <br />
            <Field
              type="email"
              id="email"
              name="email"
              className='w-100'
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label> <br />
            <Field
              type="password"
              id="password"
              name="password"
              className='w-100'
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <br />
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label> <br />
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className='w-100'
            />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>
          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default RegisterForm;