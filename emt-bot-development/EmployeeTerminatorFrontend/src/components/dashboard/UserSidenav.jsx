import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {  Home, RocketLaunch } from '@mui/icons-material';
import Logo from '../../assets/logo.png';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: '#3C1053',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': { ...openedMixin(theme), backgroundColor: '#5A287D' },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': { ...closedMixin(theme), backgroundColor: '#5A287D' },
    }),
    backgroundColor: '#5A287D',
  }),
);

const listItems = [
  {
    "name": "UserHomepage",
    "icon": <Home />,
    "link": "/userdashboard",
    "userType": "user" // Displayed for users
  },
  {
    "name": "Initiate Process",
    "icon": <RocketLaunch />,
    "link": "/userdashboard/resignation",
    "userType": "user" // Displayed for users
  }
];
export default function UserSidenav() {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userType = userData ? userData.userType : null;
    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setOpen(true);
      }
    };
  
    const updateSidebarState = () => {
      const isLaptop = window.matchMedia('(min-width: 1024px)').matches;
      setOpen(isLaptop);
    };
  
    React.useEffect(() => {
      updateSidebarState(); // Initial check
      window.addEventListener('resize', updateSidebarState);
      return () => {
        window.removeEventListener('resize', updateSidebarState);
      };
    }, []);
  
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    // For greeting the user according to the time of the day
    const [greeting, setGreeting] = React.useState('');
    React.useEffect(() => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
  
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good morning🌄');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good afternoon🌞');
      } else {
        setGreeting('Good evening🌙');
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('user');
      navigate("/");
    };
    const handleProfile = () => {
      navigate("/userdashboard/profile");
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* AppBar code */}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="p" noWrap component="div">
              {greeting}
            </Typography>
            {/* <IconButton sx={{
              marginRight: 6,
              position: 'fixed',
              right: 0,
            }} color="inherit" edge="end" aria-label="profile">
              <NotificationsDrawer />
            </IconButton> */}
  
            <IconButton onClick={handleOpenUserMenu} sx={{
              marginRight: 2,
              position: 'fixed',
              right: 0,
            }} color="inherit" edge="end" aria-label="profile">
              <AccountCircleIcon />
            </IconButton>
  
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem>
                  <Typography textAlign="center" onClick={handleProfile}>Profile</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                </MenuItem>
              
            </Menu>
  
          </Toolbar>
        </AppBar>
        {/* Drawer Code */}
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={() => setOpen(!open)} sx={{ color: 'white' }}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
  
          <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, mb: 2 }}>
            <img
              src={Logo}
              alt="Smart Toy"
              style={{
                width: open ? '40px' : '30px',
                height: open ? '35px' : '28px',
                marginBottom: open ? '8px' : '16px',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <span style={{ color: 'white', fontSize: open ? '16px' : '0' }}>Exit Flow</span>
          </Typography>
  
          <List>
            {listItems.map((item, index) => (
              // Conditionally render based on userType
            //   (!userType || item.userType === userType || userType === 'admin') && (
                <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
                  <ListItem disableGutters disablePadding sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3, marginTop: 3 }}>
                    {open ? (
                      <Button variant='contained' color='secondary'
                        sx={{
                          backgroundColor: open ? '#F2F2F8' : 'transparent',
                          color: '#131313',
                          borderRadius: '25px',
                          minHeight: 48,
                          px: 1,
                          width: '80%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: 'auto',
                          marginLeft: open ? 'auto' : '16px',
                          marginRight: open ? 'auto' : '16px',
                          '&:hover': {
                            backgroundColor: '#E9DBF2',
                          },
                        }}
                      >
                        <ListItemIcon sx={{ mx: 1, color: '#000000', fontSize: '1rem' }}>
                          {item.icon}
                        </ListItemIcon>
                        {open ? (
                          <ListItemText primary={item.name} sx={{ marginLeft: "-50px", textAlign: "center", textTransform: 'none', fontFamily: 'Montserrat' }} />
                        ) : null}
                      </Button>
                    ) : (
                      // Render only the list item icons when closed
                      <ListItemIcon sx={{ px: 2.3, minWidth: 0, marginRight: -1, color: '#F2F2F8', fontSize: '1rem' }}>
                        {item.icon}
                      </ListItemIcon>
                    )}
                  </ListItem>
                </Link>
              )
            // ))}
             )}
          </List>
        </Drawer>
      </Box>
    );
}
