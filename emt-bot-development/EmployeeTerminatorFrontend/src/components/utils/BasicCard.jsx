import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';


export default function BasicCard({data}) {
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
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#7D7D7D' }}>
          {data.date}
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
        <Link to="/dashboard/status">
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