import React from 'react';
import NoDataImage from '../../assets/NoData.jpg';
import { Box, Typography } from '@mui/material';

const NoRequests = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="70vh"
            margin="auto"
        >
            <Typography variant="h5" sx={{ marginBottom: '16px' }}>
                No requests found
            </Typography>
            <img
                src={NoDataImage}
                alt="No Data"
                style={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: '500px',
                }}
                sx={{
                    width: { xs: '80%', sm: '60%', md: '40%' }, 
                }}
            />
        </Box>
    );
};

export default NoRequests;
