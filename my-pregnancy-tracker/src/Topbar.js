// src/Topbar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './assets/Pram.svg'; // Adjust the path to your logo
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c4ecf8', // Custom color
    },
    // Add other customizations here
  },
});

function Topbar() {
  return (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
          <Logo style={{ marginRight: '10px', width: '40px', height: '40px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Pregnancy Tracker
          </Typography>
        </Link>
        {/* Other content */}
      </Toolbar>
    </AppBar>
  </ThemeProvider>
  );
}

export default Topbar;
