import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    //Texto superior
    <AppBar position="static" sx={{ mb: 4, bgcolor: '#1a1a1a' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Anillo Único
        </Typography>
        <Typography variant="h6">
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}