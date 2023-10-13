import { useState } from 'react'
import LogoImage from '../../assets/logo.png'
import './styles/Login.css'
import { useFormik } from 'formik'
import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField, Typography } from '@mui/material'
import * as Yup from 'yup'
import { KeyboardArrowRight, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { login } from '../redux/Auth'
import { userLogin } from '../redux/User'
import { useDispatch } from 'react-redux'
import { ScaleLoader } from 'react-spinners'

const Login = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)   
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(""); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        formik.resetForm();
        setLoading(true);
        const response = await axios.post('http://localhost:9000/api/v1/auth/login', values);

        fetch(`http://localhost:9001/api/v1/employee/email/${values.email}`)
        .then(res=>res.json())
        .then(data=>{
          dispatch(userLogin({user:data}))
          console.log(data);
      })
        const userData = response.data;
        console.log(userData);
        setMessage("Login Successful");
        setSeverity("success");
        dispatch(login(userData));
        localStorage.setItem('user', JSON.stringify(userData));
        setOpen(true);
        setLoading(false);
        setTimeout(() => {
          if (userData.userType === 'admin') {
            navigate('/admindashboard', { replace: true });
          } else if (userData.userType === 'user') {
            navigate('/userdashboard', { replace: true });
          }

        }, 1000)
      } catch (error) {
        setLoading(false);
        formik.resetForm();
        console.log('Error', error.response.data);
        setMessage(error.response.data);
        setSeverity("error");
        setOpen(true);
      }
    }
  })

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (

    <Box className='main' style={{ position: 'relative' }}>
      {loading && (
                <div className='loading-spinner' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
                    <ScaleLoader color='#5a287d' loading={loading} height={50} width={6} radius={2} margin={2} />
                </div>
            )}
      <Box className={`login-container ${loading ? 'faded' : ''}`} sx={{
        sm: {
          width: "300px",
        }
      }}>
        <Box className='logo'>
          <img src={LogoImage} className='logo-image' alt='logo' />
        </Box>
        <Typography variant='h6' sx={{ color: "#000", fontFamily: "Montserrat", fontWeight: 500, fontSize: "20px" }} className='title'>Welcome back!</Typography>
        <Typography variant='h6' sx={{ color: "#5A287D", fontFamily: "Montserrat", fontWeight: 700, marginTop: "20px" }} className='title'>Login Here</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ marginTop: "1em" }}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ width: "100%" }}
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <Box className="error-message">{formik.errors.email}</Box>
            ) : null}

          </Box>
          <Box sx={{ marginTop: "1em" }}>
            <FormControl variant="outlined" sx={{ width: "100%" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <Box className="error-message">{formik.errors.password}</Box>
              ) : null}
            </FormControl>
          </Box>
          <Box sx={{ marginTop: "1em" }}>
            <Typography variant='body2' sx={{ color: "#9C9898", fontFamily: "Montserrat", textAlign: "right", textDecoration: "underline" }} className='title'><Link to='/change-password'>Forgot Password?</Link></Typography>
          </Box>
          <Box sx={{ marginTop: "1em" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "100%", background: "#5A287D", '&:hover': { background: "#5A287D" } }}
              endIcon={<KeyboardArrowRight />}
              disabled={!formik.isValid}
            >
              Login
            </Button>
          </Box>
          <Box sx={{ marginTop: "1em" }}>
            <Typography variant='body2' sx={{ color: "#9C9898", fontFamily: "Montserrat", textAlign: "center" }} className='title'>Don't have an account? <Link to='/register' style={{ textDecoration: "underline", fontWeight: 700, color: "#5A287D" }}>Register Here</Link></Typography>
          </Box>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>

  )
}

export default Login
