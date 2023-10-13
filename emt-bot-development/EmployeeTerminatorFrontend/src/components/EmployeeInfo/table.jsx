import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { data } from '../Status/makeData';

const Example = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'eid',
        header: 'Employee ID',
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      
    ],
    [],
    //end
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
     
      muiTableBodyRowProps={({ row }) => ({
        onClick: (event) => {
          console.info(event, event.target.firstChild.data);
        },
        sx: {
          cursor: 'pointer', //you might want to change the cursor too when adding an onClick
        },
      })}
    />
  );
};

export default Example;