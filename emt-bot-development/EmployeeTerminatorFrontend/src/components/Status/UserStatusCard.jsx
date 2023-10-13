import React, { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Stepper, Step, StepLabel, Button, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';
import { useParams } from 'react-router';
import UserBasicCard from '../utils/UserBasicCard';

export default function UserStatusCard() {
    const { employeeId } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const[progress,setProgress]=useState(0);
    useEffect(() => {
      try {
        const fetchDataUrl = `http://localhost:9010/resignations/${employeeId}`;
        const fetchData = async () => {
            const dataResponse = await fetch(fetchDataUrl);

            if (!dataResponse.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await dataResponse.json();
            console.log(data);
            console.log(data.approvedByHR);

            // Set the initial step based on the value of approvedByHR
            if (data.approvedByHR) {
                setActiveStep(data.approvedByHR ? 1 : 0);
            } else {
                setActiveStep(0);
            }
        };

        const fetchDataUrl1 = `http://localhost:9010/parcels/${employeeId}`;
        const fetchData1 = async () => {
            const dataResponse1 = await fetch(fetchDataUrl1);

            if (!dataResponse1.ok) {
                throw new Error('Failed to fetch data');
            }

            const data1 = await dataResponse1.json();
            console.log(data1);
            console.log(data1.verifiedByHR);

            // Set the initial step based on the value of approvedByHR
            if (data1.verifiedByHR) {
                setActiveStep(data1.verifiedByHR ? 2 : 0);
            } else {
                setActiveStep(0);
            }


            const fetchDataUrl2 = `http://localhost:9010/payrolls/${employeeId}`;
                const dataResponse2 = await fetch(fetchDataUrl2);

                if (!dataResponse2.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data2 = await dataResponse2.json();
                console.log(data2);
                console.log(data2.acknowledgedByHR);

                // Check if isApprovedByHR is true
                if (data2.acknowledgedByHR) {
                    console.log(data2.acknowledgedByHR);
                    // Continue to the next step after successful update and verification
                    setActiveStep(3);
                } else {
                    // Handle case where isApprovedByHR is not true
                    console.error('AcknowledgedByHR is not true');
                }

                if(activeStep===3){
                  setActiveStep(4)
              }
        };
        fetchData()
      } catch (error) {
          console.error('Error fetching data:', error);
      }

      // try{
      //     const fetchDataUrl1 = `http://localhost:9010/parcels/${employeeId}`;
      //     const fetchData1 = async () => {
      //         const dataResponse1 = await fetch(fetchDataUrl1);

      //         if (!dataResponse1.ok) {
      //             throw new Error('Failed to fetch data');
      //         }

      //         const data1 = await dataResponse1.json();
      //         console.log(data1);
      //         console.log(data1.verifiedByHR);
      //          // Set the initial step based on the value of approvedByHR
      //          if (data1.verifiedByHR) {
      //             setActiveStep(data1.verifiedByHR ? 2 : 0);
      //         } else {
      //             setActiveStep(1);
      //         }
      //     };
      //     fetchData1();
      //     }
      // catch(error){
      //     console.error('Error fetching data:', error);
      // }
  }, [employeeId]);
    // const [formData, setFormData] = useState({
    //   trackingId: '',
    //   deliveryName: '',
    //   clearPayroll: 'yes',
    // });
  
    const steps = ['Initiated','Assets Returned', 'Clear Payroll', 'Finished'];
  
    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
  
    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };

    return (
      <Card sx={{ marginTop: "30px" }}>
        <CardHeader
          sx={{ backgroundColor: "#5A287D", color: "white"}}
          title="Application Status"
        />
        <CardContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography sx={{ mt: 2, marginLeft: 7 }}>Termination Approved!</Typography>
              </div>
            ) : (
              <div>
                {/* {activeStep === 0 && (
                  <Typography sx={{ mt: 2, marginLeft: 7 }}>Application Initiated!</Typography>
                )} */}
                {/* {activeStep === 1 && (
                  <Box sx={{display: "flex", flexDirection: "column",
                  width: {
                    sm: "100%",
                    xs: "100%",
                    lg: "40%" 
                  },}}>
                    <TextField
                    label="Tracking ID"
                    variant="outlined"
                    name="trackingId"
                    value={formData.trackingId}
                    onChange={handleInputChange}
                    // fullWidth
                    sx={{ mt: 2 }}
                  />
                  <TextField
                  label="Delivery Partner Name"
                  variant="outlined"
                  name="deliveryName"
                  value={formData.deliveryName}
                  onChange={handleInputChange}
                  // fullWidth
                  sx={{ mt: 2 }}
                />
                  </Box>
                  
                )}
                {activeStep === 2 && (
                  <FormControl component="fieldset" sx={{mt: 2}}>
                    <FormLabel component="legend">Payroll Cleared:</FormLabel>
                    <RadioGroup
                      aria-label="clearPayroll"
                      name="clearPayroll"
                      value={formData.clearPayroll}
                      onChange={handleInputChange}
                      sx={{ mt: 2 }}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                )} */}
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }} >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    style={{ background: '#5a287d' }}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box> */}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
    );
}
