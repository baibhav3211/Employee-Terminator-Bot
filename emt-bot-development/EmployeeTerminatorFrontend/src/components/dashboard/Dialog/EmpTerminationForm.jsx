import { Save} from '@mui/icons-material';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'

const EmpTerminationForm = () => {
    const formik = useFormik({
        initialValues: {
            LastWorkingDay: '',
            Reason: '',
        },
        validationSchema: Yup.object({
            LastWorkingDay: Yup.string()
                .required("Required field"),

            Reason: Yup.string()
                .required("Reason is required"),
        }),
        onSubmit: async (values) => {
            console.log(values);
        }
    })
    const [hasError, setHasError] = useState(false);
    return (

        <Box>
            <Box>
                <Typography variant='h6' sx={{ color: "#5A287D", fontFamily: "Montserrat", fontWeight: 700, marginTop:"16px" }} className='title'>Termination Form</Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ marginTop: "1em" }}>
                        <InputLabel
                            htmlFor="LastWorkingDay"
                            sx={{ color: "#5A287D", fontWeight: 500, fontSize:"12px", marginBottom: "8px", marginLeft: -5.8 }} // Customize styles here
                        >
                            Last Working Day
                        </InputLabel>
                        <TextField
                            id="LastWorkingDay"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            name="LastWorkingDay"
                            type="date"
                            InputLabelProps={{
                                shrink: !!formik.values.LastWorkingDay,
                            }}
                            onChange={formik.handleChange}
                            value={formik.values.LastWorkingDay}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.LastWorkingDay && formik.errors.LastWorkingDay ? (
                            <Box className="error-message">{formik.errors.LastWorkingDay}</Box>
                        ) : null}

                    </Box>
                    <Box sx={{ marginTop: "1em" }}>
                        <TextField
                            id="Reason"
                            label="Reason"
                            variant="outlined"
                            sx={{ width: "100%",
                            minHeight: "48px", // Set a minimum height to ensure visibility
                            "&.auto-height-textfield": {
                                minHeight: "unset", // Remove the minimum height for this class
                            },
                        }}
                        className="auto-height-textfield" 
                            name="Reason"
                            multiline
                            // rows={4}
                            onChange={formik.handleChange}
                            value={formik.values.Reason}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.Reason && formik.errors.Reason ? (
                            <Box className="error-message">{formik.errors.Reason}</Box>
                        ) : null}
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
            </Box>
        </Box>

    )
}

export default EmpTerminationForm