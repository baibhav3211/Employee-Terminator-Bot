import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import EmpTerminationForm from './EmpTerminationForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  // Center the dialog on small screens (mobile and tablets)
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    flexDirection: 'column',
    padding: '2em',
    textAlign: 'center',
    transition: 'height 0.3s ease',
  },
  textAlign: 'center',
}));
const dialogStyle = {
  // Add space around the dialog content
  margin: '16px',
  // Set a maximum width for the dialog
  maxWidth: '500px',
  backgroundColor: '#F2F2F8',
};
export default function Dialog1(props) {
  const { open, onClose } = props; 
  const theme = useTheme();
  
  return (
    <div>
      <BootstrapDialog 
        onClose={onClose} 
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: dialogStyle,
        }}
        sx={{
          sm: {
            width: "300px",
          }
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose} 
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent >
          <EmpTerminationForm />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}