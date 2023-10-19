import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function Footer() {
  return (
    <Paper square elevation={0}>
      <Box p={2} sx={{backgroundColor:'green'}}>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()}  Footer
        </Typography>
      </Box>
    </Paper>
  );
}

export default Footer;
