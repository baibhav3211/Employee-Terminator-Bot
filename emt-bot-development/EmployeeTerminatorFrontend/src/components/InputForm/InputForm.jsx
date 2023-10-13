import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Alert, Box, Button, InputAdornment, MenuItem, Snackbar, TextField, Typography } from '@mui/material';
import countries from './countries.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const InputForm = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)  
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(""); 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            city: "",
            phone: "",
            address: "",
            dob: "",
            doj: "",
            account: "",
            ifsc: "",
            bankName: "",
            compensation: "",
            position: "",
            department: "",
            country: "",
            state: "",
            gender: "",
            status: "",
            teamId:""

        },
        onSubmit: item => {

            fetch("http://localhost:9001/api/v1/employee", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Employee added successfully");
                    setMessage("Employee added successfully");
                    setSeverity("success");
                    setOpen(true);
                    setTimeout(() => {
                    navigate('/login', { replace: true });
                  
        
                }, 2000)
            
                })

                

        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .matches(/^[A-Za-z\\s'-.]+$/, 'Enter a valid First Name')
                .required("Required Field"),
            lastname: yup.string()
                .matches(/^[A-Za-z\\s'-.]+$/, 'Enter a valid Last Name')
                .required("Required Field"),
            email: yup.string()
                .email('Enter a valid Email')
                .required("Required Field"),
            phone: yup.string()
                .required("Required Field")
                .matches(/^[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/, 'Enter a valid Contact Number'),
            country: yup.string()
                .required("Required Field"),
            city: yup.string()
                .required("Required Field"),
            dob: yup.string()
                .required("Required Field"),
            doj: yup.string()
                .required("Required Field"),
            state: yup.string()
                .required("Required Field"),
            bankName: yup.string()
                .required("Required Field"),
            compensation: yup.string()
                .matches(/^[0-9]+$/, 'Invalid Entry')
                .required("Required Field"),
            account: yup.string()
                .required("Required Field")
                .matches(/^\d{9,18}$/, 'Enter a valid Account Number'),
            ifsc: yup.string()
                .required("Required Field")
                .matches(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/, 'Enter a valid IFSC Code'),
            position: yup.string()
                .required("Required Field"),
            department: yup.string()
                .required("Required Field"),
            address: yup.string()
                .required("Required Field"),
            gender: yup.string()
                .required("Required Field"),
            status: yup.string()
                .required("Required Field"),
            teamId: yup.string()
                .required("Required Field")
        })

    })

    const statuses = [
        {
            value: 'Full-Time',
            label: 'Full-Time',
        },
        {
            value: 'Part-Time',
            label: 'Part-Time',
        },
        {
            value: 'Intern',
            label: 'Intern',
        },
    ];

    const genders = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
        {
            value: 'Others',
            label: 'Others',
        },
    ];


    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <form onSubmit={formik.handleSubmit}>
                        <Typography className="line" sx={{ color: "#5A287D", fontWeight: 700, fontSize: '40px', marginTop: 5, textAlign: 'center' }}>
                            EMPLOYEE DETAILS
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{ color: "#3C1053", fontSize: 25, marginTop: 3 }}>
                                    Personal details
                                </Typography>
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="firstname"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="firstname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.firstname && formik.touched.firstname ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.firstname}</Box> : null}
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="lastname"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="lastname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.lastname && formik.touched.lastname ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.lastname}</Box> : null}
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.email && formik.touched.email ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.email}</Box> : null}
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="phone"
                                    label="Contact Number"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="phone"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.phone && formik.touched.phone ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.phone}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="dob"
                                    label="Date of Birth"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="dob"
                                    type="date"
                                    onChange={formik.handleChange}
                                    value={formik.values.dob}
                                    onBlur={formik.handleBlur}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={ { max: "2006-01-01"} }
                                    required
                                />
                                {formik.errors.dob && formik.touched.dob ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.dob}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="gender"
                                    label="Gender"
                                    select
                                    fullWidth
                                    color='secondary'
                                    name="gender"
                                    onChange={formik.handleChange}
                                    value={formik.values.gender}
                                    onBlur={formik.handleBlur}
                                    required
                                >
                                    {genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>))}
                                </TextField>
                                {formik.errors.gender && formik.touched.gender ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.gender}</Box> : null}
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{ color: "#3C1053", fontSize: 25, marginTop: 3 }}>
                                    Address
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="address"
                                    label="Address Line-1"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="address"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.address && formik.touched.address ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.address}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="city"
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="city"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.city && formik.touched.city ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.city}</Box> : null}
                            </Grid>


                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="state"
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="state"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.state}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.state && formik.touched.state ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.state}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    label="Country"
                                    fullWidth
                                    select
                                    color='secondary'
                                    name="country"
                                    onChange={formik.handleChange}
                                    value={formik.values.country}
                                    onBlur={formik.handleBlur}
                                    required>
                                    {Object.keys(countries).map((item, pos) => {
                                        return (
                                            <MenuItem key={pos} value={item}>
                                                {countries[item]}
                                            </MenuItem>)
                                    })}
                                </TextField>
                                {formik.errors.country && formik.touched.country ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.country}</Box> : null}
                            </Grid>

                            <Grid item xs={12} >
                                <Typography sx={{ color: "#3C1053", fontSize: 25, marginTop: 3 }}>
                                    Employment Information
                                </Typography>
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="doj"
                                    label="Date of Joining"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="doj"
                                    type="date"
                                    onChange={formik.handleChange}
                                    value={formik.values.doj}
                                    onBlur={formik.handleBlur}
                                    InputLabelProps={{ shrink: true }}
                                    required
                                />
                                {formik.errors.doj && formik.touched.doj ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.doj}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="department"
                                    label="Department"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="department"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.department}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.department && formik.touched.department ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.department}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="position"
                                    label="Job Title"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="position"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.position}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.position && formik.touched.position ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.position}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="status"
                                    label="Employment Status"
                                    select
                                    fullWidth
                                    color='secondary'
                                    name="status"
                                    onChange={formik.handleChange}
                                    value={formik.values.status}
                                    onBlur={formik.handleBlur}
                                    required
                                >
                                    {statuses.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>))}
                                </TextField>

                                {formik.errors.status && formik.touched.status ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.status}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="teamId"
                                    label="Team ID"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="teamId"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.teamId}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.teamId && formik.touched.teamId ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.teamId}</Box> : null}
                            </Grid>


                            <Grid item xs={12}>
                                <Typography sx={{ color: "#3C1053", fontSize: 25, marginTop: 3 }}>
                                    Compensation Details
                                </Typography>
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="bankName"
                                    label="Bank Name"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="bankName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.bankName}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.compensation && formik.touched.compensation ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.compensation}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="compensation"
                                    label="Compensation"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="compensation"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.compensation}
                                    onBlur={formik.handleBlur}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                    }}
                                    required
                                />
                                {formik.errors.compensation && formik.touched.compensation ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.compensation}</Box> : null}
                            </Grid>


                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="account"
                                    label="Account Number"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="account"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.account}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.account && formik.touched.account ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.account}</Box> : null}
                            </Grid>

                            <Grid item sm={6} xs={12} >
                                <TextField
                                    id="ifsc"
                                    label="IFSC Code"
                                    variant="outlined"
                                    fullWidth
                                    color='secondary'
                                    name="ifsc"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.ifsc}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.errors.ifsc && formik.touched.ifsc ? <Box sx={{ color: "red", fontSize: "small" }}>{formik.errors.ifsc}</Box> : null}
                            </Grid>

                            <Grid item sm={4} xs={6}>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    sx={{
                                        backgroundColor: "#5A287D",
                                        color: 'white',
                                        '&:hover': { backgroundColor: '#3C1053' }
                                    }}
                                    fullWidth>
                                    Submit
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                    </Snackbar>
                </Container>
            </Grid>
        </Grid>
    )

}

