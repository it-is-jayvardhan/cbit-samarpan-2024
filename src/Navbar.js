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
import RegistrationIcon from '@mui/icons-material/Assignment';
import {
  MemoryRouter,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { AppBar, Avatar, Card, CardContent, Grid, IconButton } from '@mui/material';

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
  const routeMatch = useRouteMatch(['/', '/Registration']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} textColor="secondary"
    indicatorColor="secondary" centered>
      <Tab icon={<HomeIcon />} label="Home" value="/" to="/" component={Link} />
      <Tab icon={<RegistrationIcon />}  label="Registration" value="/Registration" to="/Registration" component={Link} />
    </Tabs>
  );
}


export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
      <Box sx={{ width: '100%' }}>
        <Card variant="outlined">
          <CardContent>
           <Grid container spacing={2}>
            <Grid item xs={2}>
            <Avatar
  alt="Remy Sharp"
  src={logo}
  sx={{ width: 56, height: 56 }}
/>
</Grid>
<Grid item xs={10}>
<Typography variant={matches ? 'h4' : 'h6'}    color="text.secondary">
              C ByreGowda Institute of Technology
            </Typography>
            </Grid>
           </Grid>

          </CardContent>
        </Card>
      <AppBar position='static'>
        <Typography variant='h4'>Samarpan 2024</Typography>
      
      </AppBar>
        <MyTabs />
      </Box>
  );
}