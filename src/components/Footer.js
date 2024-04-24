import React from 'react';
import { Box, Typography, Container, useMediaQuery, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const Footer = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  let footerHeight = '84px';
  if (isSmallScreen) {
    footerHeight = '75px';
  } else if (isMediumScreen) {
    footerHeight = '60px';
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          py: 3,
          height: footerHeight,
          position: 'fixed',
          left: 0,
          bottom: 0,
          margin:0,
          width: '100%',
          boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
          '& .MuiTypography-body2': {
            fontWeight: 'bold',
            textShadow: '1px 1px 2px black',
          },
        }}
      >
        <Container maxWidth="lg">
        <Typography
  variant="body2"
  align="center"
  sx={{
    fontWeight: 'bold',
    textShadow: '1px 1px 2px black',
    // Responsive font sizes
    fontSize: {
      xs: '0.65rem', // for small screens
      sm: '0.875rem', // for medium screens
      md: '1rem', // for large screens
    },
  }}
>
  © {new Date().getFullYear()} G R Prashanth Reddy. All rights reserved.
  <br />
  Website created by G R Prashanth Reddy under the guidance of Prof Sujani Mam Dept of ECE,CBIT. Design help Madhan Gowda M.C
 
</Typography>

        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
