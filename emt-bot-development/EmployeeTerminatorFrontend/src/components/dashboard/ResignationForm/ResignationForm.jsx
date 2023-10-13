import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';
import jsPDF from 'jspdf';
import Popup from "reactjs-popup";
import "./sigCanvas.css";
import { useNavigate } from 'react-router';

export default function ResignationForm() {
  const navigate=useNavigate()
  const userData = JSON.parse(localStorage.getItem('user'));
  const [signature, setSignature] = useState(null);
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
      e_id: "",
      department: "",
      lastWorkingDay: "",
      resignationDate: "",
      reason: "",
      signature: null,
    },
    onSubmit: async item => {
      try {
        console.log(item);
        // Reset the form
        formik.resetForm();
    
        // Generate the PDF
        generateFormPDF(item);
    
        // Make the API call
        const apiUrl = 'http://localhost:9002/api/v1/termination/request';
    
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...item,
            status:0
          }),
        });
    
        if (response.ok) {
          // Handle success, e.g., show a success message
          console.log('Resignation data successfully submitted.');
          setMessage("Resignation data successfully submitted");
          setSeverity("success");
          setOpen(true);
          setTimeout(() => {
          if (userData.userType === 'admin') {
            navigate('/admindashboard', { replace: true });
          } else if (userData.userType === 'user') {
            navigate('/userdashboard', { replace: true });
          }}, 2000)
        } else {
          // Handle errors, e.g., show an error message
          console.error('Error submitting resignation data.');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Network error:', error);
      }
      
    },
    validationSchema: yup.object().shape({
      firstname: yup.string()
        .matches(/^[A-Za-z]{3,10}$/, 'Enter a valid First Name')
        .required("Required Field"),
        lastname: yup.string()
        .required("Required Field"),
        e_id: yup.string()
        .required("Required Field"),
      department: yup.string()
        .required("Required Field"),
        lastWorkingDay: yup.string()
        .required("Required Field"),
        resignationDate: yup.string()
        .required("Required Field"),
      reason: yup.string()
        .required("Required Field"),
      signature: yup
        .mixed()
        .test("required", "Signature is required", (value) => {
          // Check if the signature is empty or not
          return value !== null;
        }),
    })
  })

  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const handleSave = () => {
    setSignature(sigCanvas.current.toDataURL("image/png"));
    formik.setFieldValue('signature', sigCanvas.current.toDataURL("image/png"));

  };


  const generateFormPDF = (formData) => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set the title of the PDF
    doc.setFontSize(16);
    doc.text("Resignation Form", 80, 20, "center");

    // Add employee details to the PDF
    doc.setFontSize(12);
    doc.text(`First Name: ${formData.firstname}`, 20, 40);
    doc.text(`Last Name: ${formData.lastname}`, 20, 50);
    doc.text(`Employee ID: ${formData.e_id}`, 20, 60);
    doc.text(`Department: ${formData.department}`, 20, 70);
    doc.text(`Last Working Day: ${formData.lastWorkingDay}`, 20, 80);

    // Add resignation details to the PDF
    doc.text(`Resignation Date: ${formData.resignationDate}`, 20, 100);
    doc.text(`Reason: ${formData.reason}`, 20, 110);

    // Add the signature to the PDF
    const imgData = formData.signature;
    doc.addImage(imgData, "JPEG", 20, 130, 60, 30);

    // Save the PDF as a file or open it in a new tab
    doc.save("resignation_form.pdf");
  };

  return (
    <Grid container sx={{ marginBottom: 3 }}>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <form onSubmit={formik.handleSubmit}>
            <Typography
              className="line"
              sx={{
                color: "#5A287D",
                fontWeight: 700,
                fontSize: "40px",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              {userData.userType === 'admin'? "Termination Form":"Resignation Form"}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  sx={{ color: "#3C1053", fontSize: 25, marginTop: 3 }}
                >
                  Employee details
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstname"
                  variant="outlined"
                  fullWidth
                  label="First Name"
                  color="secondary"
                  name="firstname"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.firstname && formik.touched.firstname ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.firstname}
                  </Box>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  name="lastname"
                  type="text"
                  label="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.lastname && formik.touched.lastname ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.lastname}
                  </Box>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="e_id"
                  variant="outlined"
                  fullWidth
                  label="Employee ID"
                  color="secondary"
                  name="e_id"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.e_id}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.e_id && formik.touched.e_id ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.e_idd}
                  </Box>
                ) : null}
              </Grid>

              

              <Grid item xs={12} sm={6}>
                <TextField
                  id="department"
                  variant="outlined"
                  fullWidth
                  label="Department"
                  color="secondary"
                  name="department"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.department}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.department && formik.touched.department ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.department}
                  </Box>
                ) : null}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastWorkingDay"
                  variant="outlined"
                  label="Last Working Day"
                  fullWidth
                  color="secondary"
                  name="lastWorkingDay"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.lastWorkingDay}
                  onBlur={formik.handleBlur}
                  InputLabelProps={{ shrink: true }}
                  required
                  inputProps={ { min: "2023-12-14"} }
                />
                {formik.errors.lastWorkingDay && formik.touched.lastWorkingDay ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.lastWorkingDay}
                  </Box>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{ color: "#3C1053", fontSize: 25, marginTop: 3 }}
                >
                  Resignation details
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="resignationDate"
                  variant="outlined"
                  label="Resignation Date"
                  fullWidth
                  color="secondary"
                  name="resignationDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.resignationDate}
                  onBlur={formik.handleBlur}
                  InputLabelProps={{ shrink: true }}
                  required
                />
                {formik.errors.resignationDate && formik.touched.resignationDate ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.resignationDate}
                  </Box>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="reason"
                  variant="outlined"
                  label="Reason"
                  fullWidth
                  multiline
                  rows={4}
                  color="secondary"
                  name="reason"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.reason}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.reason && formik.touched.reason ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.reason}
                  </Box>
                ) : null}
              </Grid>

              <Grid item xs={12}>

                <Popup
                  modal
                  trigger={<button>Open Signature Pad</button>}
                  closeOnDocumentClick={false}
                  contentStyle={{ maxWidth: '300px' }}
                >
                  {(close) => (
                    <div className="custom-modal-content">
                      <ReactSignatureCanvas
                        ref={sigCanvas}
                        canvasProps={{
                          className: 'signatureCanvas',
                        }}
                      />
                      {/* Buttons with custom styles */}
                      <button type="button" className="custom-button" onClick={handleSave}>
                        Save
                      </button>
                      <button type="button" className="custom-button" onClick={clear}>
                        Clear
                      </button>
                      <button type="button" className="custom-button" onClick={close}>
                        Close
                      </button>
                    </div>
                  )}
                </Popup>

                <br />
                <br />
                {formik.values.signature ? (
                  <img
                    src={formik.values.signature}
                    alt="my signature"
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      border: '1px solid black',
                      width: '250px',
                      height: '100px',
                    }}
                  />
                ) : null}

                {formik.errors.signature && formik.touched.signature ? (
                  <Box sx={{ color: "red", fontSize: "small" }}>
                    {formik.errors.signature}
                  </Box>
                ) : null}

              </Grid>

              <Grid item sm={4} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#5A287D",
                    color: "white",
                    "&:hover": { backgroundColor: "#3C1053" },
                  }}
                // onClick={()=>generateFormPDF()}
                >
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
