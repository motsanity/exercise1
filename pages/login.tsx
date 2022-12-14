import { useState, useRef, useEffect } from 'react';
import { Form, useFormik } from 'formik';
import type { NextPage } from 'next';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import { AppBar, Typography } from '@mui/material'
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { TextField } from '@mui/material'
import Appbar from '../components/navbar'
import axios from 'axios';
import Router from 'next/router';
import Link from "next/link";
import { useRouter } from 'next/router';
import { getCookie, getCookies, setCookie, deleteCookie } from 'cookies-next';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert'




const USED_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Login = () => {


  // state onsubmit
  const [message, setMessage] = useState<string>(''); 
  const [status, setStatus] = useState<string>(''); 
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false)
  
  

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  
  // Formik
  const formik = useFormik({
    initialValues: {

      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const res = await axios.get('https://638aa9827220b45d22805a6a.mockapi.io/data');
      const data = res.data
      const result = data.filter(function(user){
        if(user.username === values.username && user.password === values.password){

          setStatus('success')
          setMessage('success')
          setSubmitted(true)
          setCookie("token", user.id)
          Router.replace(`/profile/${user.id}`)
          
        }

        else{
          setStatus('warning')
          setMessage('account doesnt exist')
          setSubmitted(true)
        }
      })

    
  },
    validationSchema: yup.object({
      username: yup.string().trim().required('Username is required'),
    
      password: yup
        .string()
        .trim()
        .required('Password is required'),
    }),
  });
  // Formik end

  return (
    <>
      <Appbar />

      <Container maxWidth="sm" sx={{ textAlign: "center", pt: 10 }}>
        <Box
          sx={{
            marginTop: 1,
            alignItems: 'center',
            backgroundColor: ""
          }}
        >
          <Box hidden={!submitted} style={{ margin: 15 }} role="alert">
          <Alert severity={status} sx={{textAlign:"center"}}>{message}</Alert>
          </Box>
          <Typography sx={{ fontSize: 50 }}> Login </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField id="outlined-basic" label="Username" variant="outlined" sx={{ mt: 1 }}
              type="text"
              name="username"
              placeholder="John Doe"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

            />
            {formik.touched.username && formik.errors.username ? <div className="text-danger" style={{ marginBottom: -30 }}>{formik.errors.username}</div> : null}<br />

            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ mt: 1 }}
              type="password"
              name="password"
              placeholder="John Doe"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

            />
            {formik.touched.password && formik.errors.password ? <div className="text-danger" style={{ marginBottom: -30 }}>{formik.errors.password}</div> : null}<br />
            <br />

            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Login
            </Button>
            
          </form>
          {/* style={{padding:15, backgroundColor:"#379CDD", color:"white",width:"100%", borderRadius:"1"}}> */}


        </Box>
      </Container>

    </>
  );
};

export default Login;