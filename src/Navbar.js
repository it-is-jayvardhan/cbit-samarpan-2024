import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import logo from "./images/cbit.jpeg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
// import RegistrationIcon from '@mui/icons-material/Assignment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {  EventNote } from '@mui/icons-material';
import { PhotoLibrary } from '@mui/icons-material';
import {makeStyles} from '@mui/styles';
import "./navbar.css";
import {
  MemoryRouter,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { AppBar, Avatar, Card, CardContent, Grid } from '@mui/material';





function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/Registration">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/Registration']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const tryStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': { // Adjust breakpoint as needed
      '& > button': { // Target tab buttons
        minWidth: '40px !important', // Set minimum width for icons
        padding: 0, // Remove default padding
      },
    },
  },
}));
function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const classes = tryStyles();
  const routeMatch = useRouteMatch(['/', '/Registration','/Participants','/Winners','/Gallery']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} textColor="secondary" variant='fullWidth'
    indicatorColor="secondary" centered style={{ display: 'flex', justifyContent: 'center', }} className={classes.root} sx={{maxWidth:{
      xs:"100vw"
    }}}>
      <Tab icon={<HomeIcon />} label="Home" value="/" to="/" component={Link} sx={{fontSize:{
         xs: '0.5rem', // for small screens
      sm: '0.875rem', // for medium screens
      md: '1rem', // for large screens
      }}} />
      <Tab icon={<EventNote />}  label="Events" value="/Registration" to="/Registration" component={Link} sx={{fontSize:{
         xs: '0.5rem', // for small screens
      sm: '0.875rem', // for medium screens
      md: '1rem', // for large screens
      }}}/>
      <Tab icon={<PeopleIcon />}   label="Participants" value="/Participants" to="/Participants" component={Link}sx={{fontSize:{
         xs: '0.5rem', // for small screens
      sm: '0.875rem', // for medium screens
      md: '1rem', // for large screens
      }}} />
      <Tab icon={<EmojiEventsIcon  />}   label="Winners" value="/Winners" to="/Winners" component={Link} sx={{fontSize:{
         xs: '0.5rem', // for small screens
      sm: '0.875rem', // for medium screens
      md: '1rem', // for large screens
      }}}/>
      <Tab icon={<PhotoLibrary  />}   label="Gallery" value="/Gallery" to="/Gallery" component={Link}sx={{fontSize:{
         xs: '0.5rem', // for small screens
      sm: '0.875rem', // for medium screens
      md: '1rem', // for large screens
      }}} />
      {/* <Tab icon={<PeopleIcon />}   label="Samarpan" value="" to="" component={Link} /> */}
    </Tabs>
  );
}
//making navbar elevated
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function Navbar(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (

      <Box sx={{ width: '100%',backgroundColor:'transparent' }} >
        <Card variant="outlined">
          <CardContent sx={{}}>
           <Grid container spacing={2}>
            <Grid item xs={2}>
            <Avatar
  alt="Remy Sharp"
  src={logo}
  sx={{ width: 56, height: 56 }}
/>
</Grid>
<Grid item xs={10}>
<Typography variant={matches ? 'h4' : 'h6'}    color="black" sx={{backgroundColor:'transparent',fontFamily:"Times New Roman",fontWeight:"bold"}}>
              C.BYREGOWDA INSTITUTE OF TECHNOLOGY
            </Typography>
            </Grid>
           </Grid>

          </CardContent>
        </Card>
        <CssBaseline />
    <ElevationScroll {...props}>
        <AppBar position='static' style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}>
        <Typography variant='h4' style={{ 
  fontFamily: '"Feast of Flesh BB", cursive',
  color: 'white', 
  fontWeight: 'bold', 
  textShadow: '3px 3px 6px #000000, 0 0 0 #000, 2px 2px 0 #000',
  letterSpacing:'0.2em',
  WebkitTextStroke: '1px black'
}}>
  Samarpan-2024
</Typography>
</AppBar>
</ElevationScroll>
<marquee><a href='https://docs.google.com/document/d/1VAiQ6e3rsOFfutOOMiEL54_pv676jsLt/edit?usp=sharing&ouid=108538715293005607808&rtpof=true&sd=true'><Typography variant='h6' sx={{color:"black"}}>Circular:- On Stage Events</Typography></a></marquee>
        <MyTabs />
      </Box>
     
     
  );
}