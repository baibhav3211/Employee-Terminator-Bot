import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import StatusCard from './StatusCard'
import TrackingHistoryCard from './TrackingHistoryCard'

export default function Status() {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Container maxWidth='xl'>
                <Grid item xs={12} sx={{marginTop:2}}>
                     <StatusCard/>
                </Grid>

                <Grid item xs={12} sx={{marginTop:2}}>
                     <TrackingHistoryCard/>
                </Grid>
            </Container>
        </Grid>
    </Grid>
  )
}
