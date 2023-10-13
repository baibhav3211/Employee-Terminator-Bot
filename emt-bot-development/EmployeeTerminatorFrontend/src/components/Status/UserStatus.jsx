import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import StatusCard from './StatusCard'
import TrackingHistoryCard from './TrackingHistoryCard'
import UserStatusCard from './UserStatusCard'


export default function UserStatus() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth='xl'>
                    <Grid item xs={12} sx={{marginTop:2}}>
                         <UserStatusCard/>
                    </Grid>
    
                    <Grid item xs={12} sx={{marginTop:2}}>
                         <TrackingHistoryCard/>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
      )
}
