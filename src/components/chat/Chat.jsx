import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Drawer, List } from '@material-ui/core';

import useStyle from './style.js';

const Chat = ({ show }) => {
  const classes = useStyle();
  return (
    <Drawer
      variant='persistent'
      anchor='right'
      open={show}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
        <Typography>Aca el chat de sala</Typography>
      </List>
    </Drawer>
  )
};

Chat.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string
};

export default Chat;