import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import NotFoundImage from '../../assets/notfound.png'; 
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const handleSubmit = () =>
    {if (userData.userType === 'admin') 
        navigate('/admindashboard', { replace: true });
      else if (userData.userType === 'user') 
        navigate('/userdashboard', { replace: true });}

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="70vh"
            margin="auto"
        >
            <img
                src={NotFoundImage}
                alt="Not Found"
                style={{
                    width: '100%',
                    maxWidth: '400px', 
                }}
            />
            <Typography variant="h5" sx={{ marginTop: '16px' }}>
                Oops! Page not found.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: '16px' }}
                onClick={handleSubmit}
            >
                Go back to Homepage
            </Button>
        </Box>
    );
};

export default NotFound;
