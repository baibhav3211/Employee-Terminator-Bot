import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import StatusCard from './StatusCard'
import TrackingHistoryCard from './TrackingHistoryCard'
import AdminStatusCard from './AdminStatusCard'
import { useParams } from 'react-router-dom'


export default function AdminStatus() {
    const { employeeId } = useParams();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth='xl'>
                    <Grid item xs={12} sx={{marginTop:2}}>
                         <AdminStatusCard/>
                    </Grid>
    
                </Container>
            </Grid>
        </Grid>
      )
}
