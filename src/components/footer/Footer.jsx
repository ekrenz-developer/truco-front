import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import style from './style.js';

const Footer = () => {
  const classes = style();
  return (
    <Grid container className={classes.container}>
      <Typography>Footer</Typography>
    </Grid>
  )
};

export default Footer;