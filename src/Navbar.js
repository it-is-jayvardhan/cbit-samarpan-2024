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
import {  EventNote } from '@mui/icons-material';
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

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/', '/Registration','/Participants']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} textColor="secondary"
    indicatorColor="secondary" centered>
      <Tab icon={<HomeIcon />} label="Home" value="/" to="/" component={Link} />
      <Tab icon={<EventNote />}  label="Events" value="/Registration" to="/Registration" component={Link} />
      <Tab icon={<PeopleIcon />}   label="Participants" value="/Participants" to="/Participants" component={Link} />
      {/* <Tab icon={<PhotoLibraryIcon  />}   label="Gallery" value="" to="" component={Link} /> */}
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
        <MyTabs />
      </Box>
     
     
  );
}