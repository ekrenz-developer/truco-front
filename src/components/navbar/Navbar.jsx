import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import style from './style.js';

const Navbar = () => {
  const classes = style();
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography className={classes.title} variant='h6'>Truco</Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;