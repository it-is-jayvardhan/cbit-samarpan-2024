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

  const footerHeight = useMediaQuery('(max-width:600px)') ? 'auto' : '64px';

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
        //   position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
          '& .MuiTypography-body2': {
            fontWeight: 'bold',
            textShadow: '1px 1px 2px black',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} G R Prashanth Reddy. All rights reserved.
            <br />
            Website created by G R Prashanth Reddy under the guidance of Prof Sujani Mam Dept of ECE,CBIT.
            <br/>
            Design help Madhan Gowda M.C
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
