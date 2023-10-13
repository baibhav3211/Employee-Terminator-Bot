import { Box, Grid, Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import NoRequests from '../utils/NoRequests'
import { useSelector } from 'react-redux'
import AdminBasicCard from '../utils/AdminBasicCard'

const UserHomepage = () => {
    const [terminationRequest, setTerminationRequest] = useState();
    const userInfo = useSelector(item => item.user.value.user)
    //const employeeId=userInfo.employeeId;
    const Id = userInfo.e_id;
    console.log(Id)
    // const email="s@gmail.com"

    // useEffect(() => {
    //     // Fetch resignation data from your API
    //     fetch('http://localhost:9002/api/v1/termination', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(res=>res.json())
    //         .then((data) => {
    //             console.log(data);
    //             // Assuming your API returns an array of resignation objects
    //             setTerminationRequest(data);
    //         })
    // }, []);

    useEffect(() => {
        // Fetch resignation data from your API
        fetch(`http://localhost:9002/api/v1/termination/request/id/${Id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then((data) => {
                // Assuming your API returns an array of resignation objects
                setTerminationRequest(data);
            })
            
    }, []);
    
    // const [terminationRequest, setTerminationRequest] = useState([
    //     {
    //         name: 'John Doe',
    //         date: '12/12/2021',
    //         reason: 'Personal',
    //         progress: 25
    //     },

    //     {
    //         name: 'John Doe',
    //         date: '12/12/2021',
    //         reason: 'Personal',
    //         progress: 50
    //     },
    // ])
    // const data=useSelector(item1=>item1.user.value)
    return (
        <Box>
            <Typography variant="h5" sx={{ margin: "35px 0px", fontFamily: "Montserrat" }}>Your Requests</Typography>
            <Grid container spacing={2} item xs={12} sm={6} md={6} >
                {
                    // terminationRequest.length === 0 ? (
                    //     <NoRequests />
                    // ) : (
                    //     terminationRequest.map((request, index) => (
                    //         <Grid item xs={12} sm={6} md={4} key={index}>
                    //             <UserBasicCard data={request} />
                    //         </Grid>
                    //     ))
                    // )
                    terminationRequest?(
                    
                        <AdminBasicCard data={terminationRequest} />):(<NoRequests/>)
                }
            </Grid>
        </Box>
    )
}

export default UserHomepage