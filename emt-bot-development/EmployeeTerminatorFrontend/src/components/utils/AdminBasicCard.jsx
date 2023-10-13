import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AdminBasicCard({data}) {
  const userData = JSON.parse(localStorage.getItem('user'));
  const role = userData.userType;
    return (
        <Card
          sx={{
            width: '100%', // Card width set to 100% for responsiveness
            marginBottom: 2, // Add vertical spacing between cards
            background: 'rgba(210, 210, 210, 0.6)',
          }}
        >
          <CardContent>

            <Typography variant="body2" sx={{ color: '#7D7D7D' }}>
              Employee ID : {data.e_id}
              <br />
              Name : {data.firstname} {data.lastname}
              <br />
              Department : {data.department}
              <br />
              Last Working Day : {data.lastWorkingDay}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={data.status*25}
              sx={{
                mt: 2,
                height: 15,
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#5a287d',
                },
                backgroundColor: '#fff',
              }}
            />
          </CardContent>
          { role === 'admin' && (
            <CardActions sx={{ marginLeft: '8px' }}>
            <Link to={`/admindashboard/adminstatus/${data.e_id}`}>
              <Button
                size="small"
                sx={{
                  background: '#5A287D',
                  color: '#fff',
                  '&:hover': { background: '#3C1053' },
                }}
              >
                Check Status
              </Button>
            </Link>
          </CardActions>
          )}
          
        </Card>
      );
}
