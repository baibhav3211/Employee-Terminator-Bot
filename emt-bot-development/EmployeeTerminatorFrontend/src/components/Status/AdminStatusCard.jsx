import  { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button,Grid,TextField, Box, Snackbar, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Steps } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function AdminStatusCard() {
    const navigate = useNavigate();
    const params = useParams();
    const [terminationRequest, setTerminationRequest] = useState([]);
    const [asset, setasset]=useState();
    const [employee,setemployee]=useState();
    const [open, setOpen] = useState(false)  
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(""); 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    useEffect(() => {
            // Fetch resignation data from your API
            fetch(`http://localhost:9002/api/v1/termination/request/id/${params.employeeId}`, {
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


                fetch(`http://localhost:9001/api/v1/employee/id/${params.employeeId}`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              })
                  .then(res=>res.json())
                  .then((data) => {
                      console.log(data);
                      // Assuming your API returns an array of resignation objects
                      setemployee(data);
                  })
        }, []);


        const handleInputChange = (event) => {
          setasset(event.target.value);
        };

        const handleSubmitA = async () => {
          await fetch(`http://localhost:9002/api/v1/termination/status/${params.employeeId}`, {
                method: 'PUT',
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
              
              if(terminationRequest.status==3)
              {
                
                
               await fetch(`http://localhost:9001/api/v1/employee/${params.employeeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),})
                
              
                await fetch(`http://localhost:9001/api/v1/history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            })
                .then(res=>res.json())
                .then((data) => {
                    console.log(data);
                })
              
                await fetch(`http://localhost:9002/api/v1/termination/request/${params.employeeId}`, {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              }).then(() => {
                setMessage("Request Completed")
                setSeverity("success")
                setOpen(true)
                setTimeout(() => {
                navigate('/admindashboard', { replace: true });}, 2000)
              })
            }}
            
  const handleSubmitB = () => {
  fetch(`http://localhost:9002/api/v1/termination/request/${params.employeeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(() => {
      setMessage("Request Cancelled")
      setSeverity("success")
      setOpen(true)
      setTimeout(() => {
      navigate('/admindashboard', { replace: true });}, 2000)
      })
  }

         const assetSubmit = () => {
          console.log(asset);
        
          const requestData = {
            assetId: Number(asset), // Convert the asset value to an integer
            present: "true" // Assuming "present" is always a string "true"
          };
        
          fetch("http://localhost:9002/api/v1/termination/asset", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
          })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
          })
          .then(() => {
            setMessage("Asset added successfully")
            setSeverity("success")
            setOpen(true)})
          .then(() => setasset('')); // Reset the asset input field after submission
        }

    

    return (
      <div>
<Card sx={{ marginTop: "30px" }}>
<CardHeader
    sx={{ backgroundColor: "#5A287D", color: "white" }}
    title="Application Status"
/>
<CardContent>
    <Steps
    current={terminationRequest.status}
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
  


    {terminationRequest.status==1&&(
      <Box sx={{
        display: "flex", flexDirection: "column", alignItems:"center",justifyContent:'center',
        width: {
            sm: "100%",
            xs: "100%",
            lg: "100%"
        },
    }}>
        <TextField
            label="Asset ID"
            type='number'
            variant="outlined"
            name="assetId"
            value={asset}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
        />
        <Grid item sm={4} sx={{marginTop:10}}>
        <Button
          type='submit'
          variant='contained'
          sx={{backgroundColor: "#5A287D",
          color: 'white',
          '&:hover': {backgroundColor: '#3C1053'}
            }}
          fullWidth
          onClick={assetSubmit}>
          Verify Asset
          </Button>
          </Grid>
          </Box>)}


       

<Grid container alignItems="center" justifyContent="center">
  <Grid item sm={4} xs={6} sx={{marginTop:6}}>
  <Button
    type='submit'
    variant='contained'
    sx={{backgroundColor: "#5A287D",
    color: 'white',
    '&:hover': {backgroundColor: '#3C1053'}
      }}
    fullWidth
    onClick={handleSubmitA}>
    Approve Request
    </Button>
    </Grid>
    </Grid>

    <Grid container alignItems="center" justifyContent="center">
  <Grid item sm={4} xs={6} sx={{marginTop:3}}>
  <Button
    type='submit'
    variant='contained'
    sx={{backgroundColor: "#5A287D",
    color: 'white',
    '&:hover': {backgroundColor: '#3C1053'}
      }}
    fullWidth
    onClick={handleSubmitB}>
    Cancel Request
    </Button>
    </Grid>
    </Grid>

  </CardContent>
</Card>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
    {message}
</Alert>
</Snackbar>
</div>


    );
}
