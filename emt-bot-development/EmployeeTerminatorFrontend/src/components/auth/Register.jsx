import React, { useState } from 'react'
import LogoImage from '../../assets/logo.png'
import './styles/Register.css'
import { useFormik } from 'formik'
import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField, Typography } from '@mui/material'
import * as Yup from 'yup'
import { Save, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ScaleLoader } from 'react-spinners';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]){8,}$/, 'Password must be at least 8 characters and include at least one letter, one number, and one special character')
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            console.log(values);
            try {
                formik.resetForm();
                setLoading(true);
                const response = await axios.post('http://localhost:9000/api/v1/auth/register', values);
                console.log(response.data);
                setLoading(false);
                setMessage("User registered successfully. Please wait till your accounts gets activated by admin!");
                setOpen(true);
                setTimeout(() => {
                    
                      navigate('/addemployee', { replace: true });
                    
          
                  }, 2000)
            } catch (error) {
                console.log('Error ', error);
                setLoading(false);
            }
        }
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
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
            <Box className={`register-container ${loading ? 'faded' : ''}`} sx={{
                sm: {
                    width: "300px",
                }
            }}>
                <Box className='logo'>
                    <img src={LogoImage} className='logo-image' alt='logo' />
                </Box>
                <Typography variant='h6' sx={{ color: "#5A287D", fontFamily: "Montserrat", fontWeight: 700 }} className='title'>Register Here</Typography>
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
                        <FormControl variant="outlined" sx={{ width: "100%" }}>
                            <InputLabel htmlFor="outlined-adornment-password">
                                Confirm Password
                            </InputLabel>
                            <OutlinedInput
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                                name="confirmPassword"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <Box className="error-message">{formik.errors.confirmPassword}</Box>
                            ) : null}
                        </FormControl>
                    </Box>
                    <Box sx={{ marginTop: "1em" }}>
                        <Typography variant='body2' sx={{ color: "#9C9898", fontFamily: "Montserrat", textAlign: "right" }} className='title'>Already have account? <Link to='/login' style={{ textDecoration: "underline", fontWeight: 700, color: "#5A287D" }}>Login</Link></Typography>
                    </Box>
                    <Box sx={{ marginTop: "1em" }}>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ width: "100%", background: "#5A287D", '&:hover': { background: "#5A287D" } }}
                            endIcon={<Save />}
                            disabled={!formik.isValid}
                        >
                            Submit
                        </Button>
                    </Box>

                </form>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>

            </Box>
        </Box>

    )
}

export default Register