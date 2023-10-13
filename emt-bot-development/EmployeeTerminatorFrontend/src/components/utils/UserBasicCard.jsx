import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserBasicCard({data}) {
    return (
        <Card
          sx={{
            width: '100%', // Card width set to 100% for responsiveness
            marginBottom: 2, // Add vertical spacing between cards
            background: 'rgba(210, 210, 210, 0.6)',
          }}
        >
           <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {data.firstName} {data.lastName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#7D7D7D' }}>
              {data.employeeId}
              <br />
              {data.reason}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={data.progress}
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
          <CardActions sx={{ marginLeft: '8px' }}>
            <Link to={`/userdashboard/userstatus/${data.employeeId}`}>
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
        </Card>
      );
    }
