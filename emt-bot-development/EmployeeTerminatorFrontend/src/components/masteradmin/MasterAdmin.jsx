import { useState, useEffect } from 'react';
import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button, Snackbar, Alert } from '@mui/material';
import ScaleLoader from 'react-spinners/ScaleLoader'; // Import the loader component

const buttonStyle = {
    backgroundColor: '#5a287d',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    margin: '0 5px',
    cursor: 'pointer',
};

export default function MasterAdmin() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading as true
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
        // Fetch data from the API and map it to include an "id" property
        fetch('http://localhost:9000/api/v1/auth/getinactiveusers')
            .then((response) => response.json())
            .then((data) => {
                // Map the data to include "id" property with "userId" value
                const mappedData = data.map((item) => ({
                    userId: item.userId,
                    email: item.email,
                    id: item.userId, // Explicitly set id here
                    userType: item.userType,
                }));
                setRows(mappedData);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false on error
            });
    }, []);

    // Function to update user type by calling the API
    const updateUserType = (userId, userType) => {
        // Set loading to true when starting the update operation
        setLoading(true);

        const apiUrl = `http://localhost:9000/api/v1/auth/updateuser/${userId}`;
        const requestBody = {
            userType: userType,
        };

        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok) {
                    const message = `User type updated successfully to ${userType} for User ID: ${userId}`;
                    setMessage(message);
                    setSeverity("success");
                    setOpen(true);

                    // Refresh the data
                    fetch('http://localhost:9000/api/v1/auth/getinactiveusers')
                        .then((response) => response.json())
                        .then((data) => {
                            const mappedData = data.map((item) => ({
                                userId: item.userId,
                                email: item.email,
                                id: item.userId,
                                userType: item.userType,
                            }));
                            setRows(mappedData);
                        })
                        .catch((error) => {
                            console.error('Error fetching updated data:', error);
                        })
                        .finally(() => {
                            // Set loading to false when the operation is complete
                            setLoading(false);
                        });
                } else {
                    const message = `Failed to update user type for User ID: ${userId}`;
                    setMessage(message);
                    setSeverity("success");
                    setOpen(true);

                    // Set loading to false on failure
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error updating user type:', error);

                // Set loading to false on error
                setLoading(false);
            });
    };


    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
            {loading && (
                <div
                    className="loading-spinner"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                    }}
                >
                    <ScaleLoader color="#5a287d" loading={loading} height={50} width={6} radius={2} margin={2} />
                </div>
            )}
            <div style={{ margin: '10px', padding: '10px', height: '100%', width: '100%' }}>
                <div style={{ backgroundColor: '#5a287d', padding: '10px' }}>
                    <Typography variant="h5" style={{ color: '#fff' }}>
                        Master Admin
                    </Typography>
                </div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User ID</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Set User Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.userId}>
                                    <TableCell>{row.userId}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => updateUserType(row.userId, 'admin')} style={buttonStyle}>
                                            Set HR
                                        </Button>
                                        <Button onClick={() => updateUserType(row.userId, 'user')} style={buttonStyle}>
                                            Set User
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
                </Snackbar>
            </div>
        </div>
    );
}
