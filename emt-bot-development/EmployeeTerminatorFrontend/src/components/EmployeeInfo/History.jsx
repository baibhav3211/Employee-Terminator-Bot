import { useMemo ,useEffect,useState} from 'react';
import { MaterialReactTable } from 'material-react-table';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box, Container, Grid } from '@mui/material';

export default function History() {

  const [history, sethistory] = useState([])

  useEffect(() => {
    fetch("http://localhost:9001/api/v1/history")
    .then(res => res.json())
    .then(data=>{
       console.log(data);
       sethistory(data)
    })
   }, [])

   const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'e_id',
        header: 'Employee ID',
      },
      {
        accessorKey: 'firstname',
        header: 'First Name',
      },
      {
        accessorKey: 'lastname',
        header: 'Last Name',
      },
      {
        accessorKey: 'position',
        header: 'Position',
      },
      {
        accessorKey: 'department',
        header: 'Department',
      },
      {
        accessorKey: 'teamId',
        header: 'Team ID',
      },
      
    ],
    [],
    //end
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth='xl'>
          <Grid item xs={12} sx={{ marginTop: 5 }}>
            <Card>
              <CardHeader
                sx={{ backgroundColor: "#5a287d", color: "white",fontWeight: 700, fontSize:'40px'}}
                title="History"
              />
              <CardContent>
              <Box sx={{ overflow: "auto" }}>
              <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>   
              <MaterialReactTable
                columns={columns}
                data={history}
            
                muiTableBodyRowProps={({ row }) => ({
                onClick: (event) => {
                console.info(event, event.target.firstChild.data)},
                sx: {
                cursor: 'pointer'},
              })}/>
              </Box></Box>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}
