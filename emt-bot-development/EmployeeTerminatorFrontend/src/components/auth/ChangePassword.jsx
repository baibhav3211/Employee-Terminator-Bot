import React, { useState } from 'react';
import LogoImage from '../../assets/logo.png';
import './styles/Login.css'
import { useFormik } from 'formik';
import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

// const ChangePassword = () => {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [severity, setSeverity] = useState('');
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);

//   const [otpFieldsEnabled, setOtpFieldsEnabled] = useState(false);
//   const [emailFieldsDisabled, setEmailFieldsDisabled] = useState(false);

//   // Formik form for email
//   const emailFormik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Required'),
//     }),
//     onSubmit: async (values) => {
//       try {
//         // Send a request to the API with the email parameter
//         setEmail(values.email);
//         setLoading(true);
//         const response = await axios.post(`http://localhost:9000/api/v1/auth/send-otp?email=${values.email}`);
//         console.log(response);
//         setMessage(response.data);
//         setSeverity('success');
//         setOpen(true);
//         // Enable OTP fields when email is submitted
//         setOtpFieldsEnabled(true);
//         setLoading(false);

//       } catch (error) {
//         setLoading(false);
//         setMessage(error.response.data);
//         setSeverity('error');
//         setOpen(true);
//       }
//     },
//   });

//   // Formik form for OTP and password
//   const otpPasswordFormik = useFormik({
//     initialValues: {
//       otp: '',
//       newPassword: '',
//       confirmPassword: '',
//     },
//     validationSchema: Yup.object({
//       otp: Yup.string()
//         .matches(/^\d{4}$/, 'OTP must be a 4-digit number')
//         .required('Required'),
//       newPassword: Yup.string()
//         .required('Required')
//         .min(8, 'Password must be at least 8 characters long'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
//         .required('Required'),
//     }),
//     onSubmit: async (values) => {
//       try {
//         setLoading(true);
//         const response = await axios.post(
//           `http://localhost:9000/api/v1/auth/verify-otp?email=${email}&otp=${values.otp}&newPassword=${values.newPassword}`,
//           values
//         );
//         console.log(response);
//         setMessage(response.data);
//         setSeverity('success');
//         setOpen(true);
//         setLoading(false);
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//       } catch (error) {
//         setLoading(false);
//         setMessage(error.response.data);
//         setSeverity('error');
//         setOpen(true);
//       }
//     },
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <Box className="main" style={{ position: 'relative' }}>
//         {loading && (
//                 <div className='loading-spinner' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
//                     <ScaleLoader color='#5a287d' loading={loading} height={50} width={6} radius={2} margin={2} />
//                 </div>
//             )}
//       <Box
//         className={`login-container ${loading ? 'faded' : ''}`}
//         sx={{
//           sm: {
//             width: '300px',
//           },
//         }}
//       >
//         <Box className="logo">
//           <img src={LogoImage} className="logo-image" alt="logo" />
//         </Box>
//         <Typography
//           variant="h6"
//           sx={{
//             color: '#000',
//             fontFamily: 'Montserrat',
//             fontWeight: 500,
//             fontSize: '20px',
//           }}
//           className="title"
//         >
//           Change Password
//         </Typography>
//         {/* Form for email */}
//         <form onSubmit={emailFormik.handleSubmit}>
//           <Box sx={{ marginTop: '1em' }}>
//             <FormControl variant="outlined" sx={{ width: '100%' }}>
//               <InputLabel htmlFor="outlined-adornment-email">
//                 Email
//               </InputLabel>
//               <OutlinedInput
//                 id="email"
//                 label="Email"
//                 name="email"
//                 type="email"
//                 onChange={emailFormik.handleChange}
//                 value={emailFormik.values.email}
//                 onBlur={emailFormik.handleBlur}
//                 disabled={otpFieldsEnabled}
//               />
//               {emailFormik.touched.email && emailFormik.errors.email ? (
//                 <Box className="error-message">{emailFormik.errors.email}</Box>
//               ) : null}
//             </FormControl>
//           </Box>
//           <Box sx={{ marginTop: '1em' }}>
//             <Button
//               variant="contained"
//               type="submit"
//               sx={{
//                 width: '100%',
//                 background: '#5A287D',
//                 '&:hover': { background: '#5A287D' },
//               }}
//               disabled={otpFieldsEnabled}
//             >
//               Send OTP
//             </Button>
//           </Box>
//         </form>
//         {/* Form for OTP and password */}
//         {otpFieldsEnabled && (
//           <form onSubmit={otpPasswordFormik.handleSubmit}>
//             <Box sx={{ marginTop: '1em' }}>
//               <FormControl variant="outlined" sx={{ width: '100%' }}>
//                 <InputLabel htmlFor="outlined-adornment-otp">
//                   OTP
//                 </InputLabel>
//                 <OutlinedInput
//                   id="otp"
//                   label="OTP"
//                   name="otp"
//                   type="text"
//                   onChange={otpPasswordFormik.handleChange}
//                   value={otpPasswordFormik.values.otp}
//                   onBlur={otpPasswordFormik.handleBlur}
//                 />
//                 {otpPasswordFormik.touched.otp && otpPasswordFormik.errors.otp ? (
//                   <Box className="error-message">{otpPasswordFormik.errors.otp}</Box>
//                 ) : null}
//               </FormControl>
//             </Box>
//             <Box sx={{ marginTop: '1em' }}>
//               <FormControl variant="outlined" sx={{ width: '100%' }}>
//                 <InputLabel htmlFor="outlined-adornment-password">
//                   New Password
//                 </InputLabel>
//                 <OutlinedInput
//                   id="newPassword"
//                   type={showPassword ? 'text' : 'password'}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="New Password"
//                   name="newPassword"
//                   onChange={otpPasswordFormik.handleChange}
//                   value={otpPasswordFormik.values.newPassword}
//                   onBlur={otpPasswordFormik.handleBlur}
//                 />
//                 {otpPasswordFormik.touched.newPassword && otpPasswordFormik.errors.newPassword ? (
//                   <Box className="error-message">
//                     {otpPasswordFormik.errors.newPassword}
//                   </Box>
//                 ) : null}
//               </FormControl>
//             </Box>
//             <Box sx={{ marginTop: '1em' }}>
//               <FormControl variant="outlined" sx={{ width: '100%' }}>
//                 <InputLabel htmlFor="outlined-adornment-password">
//                   Confirm Password
//                 </InputLabel>
//                 <OutlinedInput
//                   id="confirmPassword"
//                   type={showPassword ? 'text' : 'password'}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="Confirm Password"
//                   name="confirmPassword"
//                   onChange={otpPasswordFormik.handleChange}
//                   value={otpPasswordFormik.values.confirmPassword}
//                   onBlur={otpPasswordFormik.handleBlur}
//                 />
//                 {otpPasswordFormik.touched.confirmPassword && otpPasswordFormik.errors.confirmPassword ? (
//                   <Box className="error-message">
//                     {otpPasswordFormik.errors.confirmPassword}
//                   </Box>
//                 ) : null}
//               </FormControl>
//             </Box>
//             <Box sx={{ marginTop: '1em' }}>
//               <Button
//                 variant="contained"
//                 type="submit"
//                 sx={{
//                   width: '100%',
//                   background: '#5A287D',
//                   '&:hover': { background: '#5A287D' },
//                 }}
//                 disabled={!otpPasswordFormik.isValid}
//               >
//                 Change Password
//               </Button>
//             </Box>
//           </form>
//         )}
//         <Snackbar
//           open={open}
//           autoHideDuration={6000}
//           onClose={handleClose}
//         >
//           <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
//             {message}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </Box>
//   );
// };

// export default ChangePassword;

const ChangePassword = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const [otpFieldsEnabled, setOtpFieldsEnabled] = useState(false);

    // Formik form for email
    const emailFormik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                // Send a request to the API with the email parameter
                setEmail(values.email);
                setLoading(true);
                const response = await axios.post(`http://localhost:9000/api/v1/auth/send-otp?email=${values.email}`);
                console.log(response);
                setMessage(response.data);
                setSeverity('success');
                setOpen(true);
                setLoading(false);
                // Enable OTP fields when email is submitted
                setOtpFieldsEnabled(true);
            } catch (error) {
                setLoading(false);
                setMessage(error.response.data);
                setSeverity('error');
                setOpen(true);
            }
        },
    });

    // Formik form for OTP and password
    const otpPasswordFormik = useFormik({
        initialValues: {
            otp: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string()
                .matches(/^\d{4}$/, 'OTP must be a 4-digit number')
                .required('Required'),
            newPassword: Yup.string()
                .required('Required')
                .min(8, 'Password must be at least 8 characters long'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const response = await axios.post(
                    `http://localhost:9000/api/v1/auth/verify-otp?email=${email}&otp=${values.otp}&newPassword=${values.newPassword}`,
                    values
                );
                console.log(response);
                setMessage(response.data);
                setSeverity('success');
                setOpen(true);
                setLoading(false);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } catch (error) {
                setLoading(false);
                setMessage(error.response.data);
                setSeverity('error');
                setOpen(true);
            }
        },
    });

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
        <Box className="main" style={{ position: 'relative' }}>
            {loading && (
                <div className='loading-spinner' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
                    <ScaleLoader color='#5a287d' loading={loading} height={50} width={6} radius={2} margin={2} />
                </div>
            )}
            <Box
                className={`login-container ${loading ? 'faded' : ''}`}
                sx={{
                    sm: {
                        width: '300px',
                    },
                }}
            >
                <Box className="logo">
                    <img src={LogoImage} className="logo-image" alt="logo" />
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#000',
                        fontFamily: 'Montserrat',
                        fontWeight: 500,
                        fontSize: '20px',
                    }}
                    className="title"
                >
                    Change Password
                </Typography>
                {/* Form for email */}
                <form onSubmit={emailFormik.handleSubmit}>
                    <Box sx={{ marginTop: '1em' }}>
                        <FormControl variant="outlined" sx={{ width: '100%' }}>
                            <InputLabel htmlFor="outlined-adornment-email">
                                Email
                            </InputLabel>
                            <OutlinedInput
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                onChange={emailFormik.handleChange}
                                value={emailFormik.values.email}
                                onBlur={emailFormik.handleBlur}
                                disabled={otpFieldsEnabled}
                            />
                            {emailFormik.touched.email && emailFormik.errors.email ? (
                                <Box className="error-message">{emailFormik.errors.email}</Box>
                            ) : null}
                        </FormControl>
                    </Box>
                    <Box sx={{ marginTop: '1em' }}>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                width: '100%',
                                background: '#5A287D',
                                '&:hover': { background: '#5A287D' },
                                '&:disabled': {
                                    background: '#d5d5da',
                                    color: '#b09ea2',
                                }
                            }}
                            disabled={otpFieldsEnabled}
                        >
                            Send OTP
                        </Button>
                    </Box>
                </form>
                {/* Form for OTP and password */}
                {otpFieldsEnabled && (
                    <form onSubmit={otpPasswordFormik.handleSubmit}>
                        <Box sx={{ marginTop: '1em' }}>
                            <FormControl variant="outlined" sx={{ width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-otp">
                                    OTP
                                </InputLabel>
                                <OutlinedInput
                                    id="otp"
                                    label="OTP"
                                    name="otp"
                                    type="text"
                                    onChange={otpPasswordFormik.handleChange}
                                    value={otpPasswordFormik.values.otp}
                                    onBlur={otpPasswordFormik.handleBlur}
                                />
                                {otpPasswordFormik.touched.otp && otpPasswordFormik.errors.otp ? (
                                    <Box className="error-message">{otpPasswordFormik.errors.otp}</Box>
                                ) : null}
                            </FormControl>
                        </Box>
                        <Box sx={{ marginTop: '1em' }}>
                            <FormControl variant="outlined" sx={{ width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    New Password
                                </InputLabel>
                                <OutlinedInput
                                    id="newPassword"
                                    type={showPassword ? 'text' : 'password'}
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
                                    label="New Password"
                                    name="newPassword"
                                    onChange={otpPasswordFormik.handleChange}
                                    value={otpPasswordFormik.values.newPassword}
                                    onBlur={otpPasswordFormik.handleBlur}
                                    disabled={otpPasswordFormik.isSubmitting}
                                />
                                {otpPasswordFormik.touched.newPassword && otpPasswordFormik.errors.newPassword ? (
                                    <Box className="error-message">
                                        {otpPasswordFormik.errors.newPassword}
                                    </Box>
                                ) : null}
                            </FormControl>
                        </Box>
                        <Box sx={{ marginTop: '1em' }}>
                            <FormControl variant="outlined" sx={{ width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Confirm Password
                                </InputLabel>
                                <OutlinedInput
                                    id="confirmPassword"
                                    type={showPassword ? 'text' : 'password'}
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
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    onChange={otpPasswordFormik.handleChange}
                                    value={otpPasswordFormik.values.confirmPassword}
                                    onBlur={otpPasswordFormik.handleBlur}
                                    disabled={otpPasswordFormik.isSubmitting}
                                />
                                {otpPasswordFormik.touched.confirmPassword && otpPasswordFormik.errors.confirmPassword ? (
                                    <Box className="error-message">
                                        {otpPasswordFormik.errors.confirmPassword}
                                    </Box>
                                ) : null}
                            </FormControl>
                        </Box>
                        <Box sx={{ marginTop: '1em' }}>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    width: '100%',
                                    background: '#5A287D',
                                    '&:hover': { background: '#5A287D' },
                                }}
                                disabled={!otpPasswordFormik.isValid || otpPasswordFormik.isSubmitting}
                            >
                                Change Password
                            </Button>
                            <Box sx={{ marginTop: "1em" }}>
                                <Typography variant='body2' sx={{ color: "#9C9898", fontFamily: "Montserrat", textAlign: "center" }} className='title'>Go back to <Link to='/login' style={{ textDecoration: "underline", fontWeight: 700, color: "#5A287D" }}>Login</Link></Typography>
                            </Box>
                        </Box>
                    </form>
                )}
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
};

export default ChangePassword;