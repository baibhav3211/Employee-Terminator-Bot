import React, { useState } from 'react'
import Sidenav from './Sidenav'
import Box from '@mui/material/Box';
import Dialog1 from './Dialog/Dialog1';
import DashboardRoutes from './DashboardRoutes';
import UserSidenav from './UserSidenav';
import UserDashboardRoutes from './UserDashboardRoutes';
import ChatBotApp from '../chatbot/ChatBot';


const UserDashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#F2F2F8', minHeight: '100vh' }}>
      {/* <Box height={30}/> */}
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <UserSidenav isDialogOpen={isDialogOpen} handleOpenDialog={handleOpenDialog} />
        <Dialog1 open={isDialogOpen} onClose={handleCloseDialog} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <UserDashboardRoutes />
          <ChatBotApp />
        </Box>
      </Box>
    </div>
  )
}

export default UserDashboard
