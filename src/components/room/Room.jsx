import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Paper , Fab } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';

import useStyle from './style.js';
import Table from '../table/Table';
import Chat from '../chat/Chat';

const Room = ({ handleChatOpen }) => {
  const classes = useStyle();
  const tables = [
    {
      name: 'mesa1'
    },
    {
      name: 'mesa2'
    },
    {
      name: 'mesa3'
    },
    {
      name: 'mesa4'
    },
    {
      name: 'mesa5'
    },
    {
      name: 'mesa6'
    },
    {
      name: 'mesa7'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    },
    {
      name: 'mesa'
    }
  ];
  return (
    <Grid container className={classes.container}>
      <Paper variant='outlined' className={classes.tablesContainerMargin}>
        <Grid container className={classes.tablesContainer}>
          {
            tables.map((table, index) => (
              <Table key={index} {...table} />
            ))
          }
        </Grid>
        <Grid container>
          <Fab
            color='primary'
            aria-label='chat'
            onClick={handleChatOpen}
          >
            <ChatIcon fontSize='large'/>
          </Fab>
        </Grid>
      </Paper>
      {/*
      <Grid item xs={3}>
        <Grid container className={classes.chatRoomContainer}>
          <Chat />
        </Grid>
      </Grid>
      */}
    </Grid>
  )
};

Room.propTypes = {
  handleChatOpen: PropTypes.func.isRequired
};

export default Room;