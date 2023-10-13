import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoRequests from '../utils/NoRequests'
import AdminBasicCard from '../utils/AdminBasicCard'

const AdminHomepage = () => {
    const [terminationRequest, setTerminationRequest] = useState([]);
    useEffect(() => {
        // Fetch resignation data from your API
        fetch('http://localhost:9002/api/v1/termination', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then((data) => {
                console.log(data);
                // Assuming your API returns an array of resignation objects
                setTerminationRequest(data);
            })
    }, []);

    
    return (
        <Box>
            <Typography variant="h5" sx={{ margin: "35px 0px", fontFamily: "Montserrat" }}>Resignation Requests</Typography>
            <Grid container spacing={2} >
                {
                    terminationRequest.length === 0 ? (
                        <NoRequests />
                    ) : (
                        terminationRequest.map((request, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <AdminBasicCard data={request} />
                            </Grid>
                        ))
                    )
                }
            </Grid>
        </Box>
    )
}

export default AdminHomepage