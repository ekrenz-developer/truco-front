import React, { useState } from 'react';
import { Grid, Typography, Paper , Fab } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import clsx from 'clsx';

import useStyle from './style.js';
import Table from '../table/Table';
import Chat from '../chat/Chat';

const Room = () => {
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

  const [chatOpen, setChatOpen] = useState(false);

  const handleChatOpen = event => {
    setChatOpen(!chatOpen);
  }

  return (
    <Grid 
      container
      className={clsx(classes.container, {
        [classes.containerShift]: chatOpen
      })}
    >
      <Paper variant='outlined' className={classes.tablesContainerMargin}
      >
        <Grid container className={classes.container}>
          <Grid item className={classes.roomTablesContainer}>
            <Grid container className={classes.tablesContainer}>
              {
                tables.map((table, index) => (
                  <Table key={index} {...table} />
                ))
              }
            </Grid>
          </Grid>
          <Grid item className={classes.roomButtonContainer}>
            <Grid container className={classes.chatButtonContainer}>
              <Fab
                color='primary'
                aria-label='chat'
                onClick={handleChatOpen}
                size='small'
              >
                <ChatIcon fontSize='small'/>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container>
        <Chat show={chatOpen} />
      </Grid>
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

export default Room;