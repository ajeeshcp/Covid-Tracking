import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import PersonIcon from '@mui/icons-material/Person';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import { Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';




const drawerWidth = 240;

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
    width: `calc(${theme.spacing(9)} + 1px)`,
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
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  

  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex',height:"100vh" }}>
     
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{padding:"0.4rem",backgroundColor:"#fff",color:"#263238"}} >
            <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
              <ListRoundedIcon
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                
                edge="start"
                sx={{
    
                  fontSize:"35px",
                  cursor:"pointer",
                  fontWeight:"800",
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </ListRoundedIcon>
              <Typography  variant="h6" noWrap component="div" sx={{
                color:"#1565c0" ,
                fontSize:"25px",
                fontWeight:"900"
                
              }}>
                  
                <span style={{color:"#ff1744"}}> COVID-19</span> Battle 🇮🇳 
              </Typography>
                <CoronavirusIcon sx={{color:"#ff3d00",fontSize:"35px",marginRight:"15px"}}/>
            </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <div style={{backgroundColor:"#424242",height:"100vh",color:"#fff"}}>
          <DrawerHeader>
            <Paper sx={{padding:"2px 50px", fontWeight:"500"}}>🇮🇳  India</Paper>
            <IconButton onClick={handleDrawerClose} color="primary">
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
        <Divider />
            <List sx={{paddingLeft:"5px"}}>
              {[
                {
                  name:"Home",
                  icon:HomeRoundedIcon,
                  color:"primary",
                  route:"/"
                },
                {
                  name:"Statewise Data",
                  icon:AddLocationRoundedIcon,
                  color:"error",
                  route:"/statewise"
                },
                {
                  name:"Districtwise Search",
                  icon:MedicalServicesRoundedIcon,
                  color:"warning",
                  route:"/districtwise"
                }
                
              ].map((text, index) => (
                <ListItem onClick={() => {history.push(text.route)}} alignItems="center" button key={index} sx={{
                  marginTop:"15px" ,
                  borderRadius:"10px",
                  

                  }}>
                  <ListItemIcon>
                    <text.icon color={text.color} sx={{backgroundColor:"#fff",borderRadius:"5px",padding:"1px"}} />
                  </ListItemIcon>
                  <ListItemText primary={text.name}/>
                </ListItem>
              ))}
            </List>
        <Divider />
            <List sx={{paddingLeft:"5px"}}>
              {['About'].map((text, index) => (
                <ListItem onClick={() => {history.push("/about")}} button key={text}>
                  <ListItemIcon>
                    <PersonIcon sx={{backgroundColor:"#fff",color:"#1565c0",borderRadius:"5px"}} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            </div>
      </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3,backgroundColor:"#f5f5f5"}}>
            <DrawerHeader />
            <Typography paragraph>
              {
                props.children
              }
            </Typography>
          
          </Box>
         
        </Box>
  );
}
