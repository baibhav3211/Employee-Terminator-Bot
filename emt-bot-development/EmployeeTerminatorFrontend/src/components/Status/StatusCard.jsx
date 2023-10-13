import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Steps } from 'antd';
import {Radio,Button,Box} from "@mui/material";

export default function StatusCard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    trackingId: '',
    deliveryName: '',
    clearPayroll: 'yes',
  });

  const steps = ['Initiated','Assets Returned', 'Clear Payroll', 'Finished'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Card sx={{ marginTop: "30px" }}>
      <CardHeader
        sx={{ backgroundColor: "#5A287D", color: "white"}}
        title="Application Status"
      />
      <CardContent>
        <Steps
              current={1}
              items={[
                {
                  title: 'Process Initiated',
                },
                {
                  title: 'Assets Returned',
                },
                {
                  title: 'Clear Payroll',
                },
                {
                  title: 'Finished',
                }
              ]}
            />

            <Box>
                <Radio>Approve</Radio>
                <Button/>
            </Box>
      </CardContent>
    </Card>
  );
}
