import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Container} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const LoginForm = () =>  {
  // Validation schema using Yup
const {login} = useContext(AuthContext);
const navigate = useNavigate();
  const  validationSchema = Yup.object({
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
  const handleSubmit = (values) => {
    // Handle form submission, e.g., send data to the server
    console.log('Form data', values);
    login(values);
navigate('/home')
  };

  return (

    <Container className='box-effect  mt-3'>
      <h1 className='text-center'>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
          {
            formik =>(
              <Form>
              <div>
                <label htmlFor="email">Email</label> <br />
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className='w-100'
                />
                <ErrorMessage name="email" component="div" />
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
                <ErrorMessage name="password" component="div" />
              </div>
              <br />
              <button type="submit">Submit</button>
            </Form>
            )
          }
      
      </Formik>
    </Container>
    
  );
};
export default LoginForm;
