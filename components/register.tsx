import { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import type { NextPage } from 'next';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import {AppBar, Typography} from '@mui/material'
import {Button} from '@mui/material';
import {Container} from '@mui/material';
import {TextField} from '@mui/material'
import Appbar from './navbar'
import axios from 'axios';
import Router from 'next/router';

const USED_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Register = () => {
  

   // state onsubmit
  const [message, setMessage] = useState<string>(''); 
  const [submitted, setSubmitted] = useState<boolean>(false);

  //post request
  const PostRequest = () =>{

  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  }

  
  // Formik
  const formik = useFormik({
    initialValues: {

      user: '',
      password: '',
      confirmPassword:'',
      email: '',
      firstname: '',
      middlename: '',
      lastname: '',
      phone: '',
    },
    onSubmit: async (values) => {
      setMessage('Form submitted');
      setSubmitted(true);

      try{
        await axios.post('https://638aa9827220b45d22805a6a.mockapi.io/userData', values);
      }
      catch (err) {
        console.log(err.response.data)
    }
      
    },
    validationSchema: yup.object({
      user: yup.string().trim().required('Username is required'),
      firstname: yup.string().trim().required('First name is required'),
      lastname: yup.string().trim().required('Fast name is required'),
      phone: 
      yup.string()
        .max(10, 'Must be exactly 11 digits')
        .required("phone number is required")
        .matches(/^[0-9]+$/, "Must be only digits"),
        

      password: yup
        .string()
        .trim()
        .required('Password is required')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),

        confirmPassword: yup
        .string()
        .trim()
        .required('Password is required')
        .oneOf([yup.ref('password'), null], 'Password does not match'),

      middlename: yup.string().trim(),
      email: yup
        .string()
        .email('Must be an email')
        .required('Email is required'),
    }),
  });
  // Formik end

  return (
    <>
      <Appbar/>
      <Container maxWidth="sm">
        <div className="vh-50 d-flex flex-column justify-content-center align-items-center custom">
          <div hidden={!submitted} className="alert alert-primary" role="alert">
            {message} {/* message submitted appear */}
          </div>
          <Typography variant="h3" component="h4">
            Registration Form
          </Typography>;
          
          <form className="w-50" onSubmit={formik.handleSubmit}>

            {/* username */}
            <div className="mb-3"> 
              <label htmlFor="user" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="user"
                className="form-control"
                placeholder="John Doe"
                value={formik.values.user}
                onChange={formik.handleChange || handleChange}
                onBlur={formik.handleBlur}
                required
                
              />
              {formik.touched.user && formik.errors.user ? <div className="text-danger">{formik.errors.user}</div>:null }

            </div>
            {/* password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div>:null }
            </div>

            {/* confirm password */}
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="****"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-danger">{formik.errors.confirmPassword}</div>:null }
              
            </div>

            {/* email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="timothy@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
              />
              {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div>:null }
            </div>


            {/* phone */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                className="form-control"
                placeholder="Ex: 09123456789"
                onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0,e.target.maxLength);
                }}
                maxlength = {11}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.phone && formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div>:null }
            </div>

            {/* firstname */}
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First name
              </label>
              <input
                type="firstname"
                name="firstname"
                className="form-control"
                placeholder="Ex: Timothy"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.firstname && formik.errors.firstname ? <div className="text-danger">{formik.errors.firstname}</div>:null }
            </div>

            {/* middlename */}
            <div className="mb-3">
              <label htmlFor="middlename" className="form-label">
                Middlename
              </label>
              <input
                type="middlename"
                name="middlename"
                className="form-control"
                placeholder="Ex:De Jesus"
                value={formik.values.middlename}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
              />
            </div>

            {/* lastname */}
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="lastname"
                name="lastname"
                className="form-control"
                placeholder="Ex: De la Cruz"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.lastname && formik.errors.lastname ? <div className="text-danger">{formik.errors.lastname}</div>:null }
            </div>
            


            <Button type="submit" variant="outlined">
              Register
            </Button>
          </form>
        </div>
        </Container>
        
    </>
  );
};

export default Register;