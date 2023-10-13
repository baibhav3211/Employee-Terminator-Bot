import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import BasicCard from '../utils/BasicCard'
import NoRequests from '../utils/NoRequests'

const Homepage = () => {
    const [terminationRequest, setTerminationRequest] = useState([
        {
            name: 'John Doe',
            date: '12/12/2021',
            reason: 'Personal',
            progress: 25
        },
        
        {
            name: 'John Doe',
            date: '12/12/2021',
            reason: 'Personal',
            progress: 50
        },
    ])
    return (
        <Box>
            <Typography variant="h5" sx={{margin: "35px 0px", fontFamily: "Montserrat"}}>Your Requests</Typography>
            <Grid container spacing={2} >
                {
                    terminationRequest.length === 0 ? (
                        <NoRequests />
                    ) : (
                        terminationRequest.map((request, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BasicCard data={request} />
                            </Grid>
                        ))
                    )
                }
            </Grid>
        </Box>
    )
}

export default Homepage
