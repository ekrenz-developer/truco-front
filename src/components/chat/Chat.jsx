import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Drawer } from '@material-ui/core';

import useStyle from './style.js';

const Chat = ({ show }) => {
  const classes = useStyle();
  return (
    <Drawer
      variant='persistent'
      anchor='right'
      open={show}
    >
      <Paper elevation={1} className={classes.container}>
        <Typography>Aca el chat de sala</Typography>
      </Paper>
    </Drawer>
  )
};

Chat.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Chat;