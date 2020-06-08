import React, { useState } from "react";
import { Grid, Fab } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import clsx from "clsx";

import useStyle from "./style.js";
import Table from "../table/Table";
import Chat from "../chat/Chat";

const Room = () => {
  const classes = useStyle();
  const tables = [
    {
      _id: 1,
      name: "mesa1",
    },
    {
      _id: 2,
      name: "mesa2",
    },
    {
      _id: 3,
      name: "mesa3",
    },
    {
      _id: 4,
      name: "mesa4",
    },
    {
      _id: 5,
      name: "mesa5",
    },
    {
      _id: 6,
      name: "mesa6",
    },
    {
      _id: 7,
      name: "mesa7",
    },
    {
      _id: 8,
      name: "mesa",
    },
    {
      _id: 9,
      name: "mesa",
    },
    {
      _id: 10,
      name: "mesa",
    },
    {
      _id: 11,
      name: "mesa",
    },
    {
      _id: 12,
      name: "mesa",
    },
    {
      _id: 13,
      name: "mesa",
    },
    {
      _id: 14,
      name: "mesa",
    },
    {
      _id: 15,
      name: "mesa",
    },
  ];

  const [chatOpen, setChatOpen] = useState(false);

  const handleChatOpen = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <Grid
      container
      className={clsx(classes.container, {
        [classes.containerShift]: chatOpen,
      })}
    >
      <Grid container className={classes.container}>
        <Grid item className={classes.roomTablesContainer}>
          <Grid container className={classes.tablesContainer}>
            {tables.map((table) => (
              <Table key={table._id} name={table.name} />
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.roomButtonContainer}>
          <Grid container className={classes.chatButtonContainer}>
            <Fab color="primary" aria-label="chat" onClick={handleChatOpen} size="small">
              <ChatIcon fontSize="small" />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Chat show={chatOpen} />
      </Grid>
    </Grid>
  );
};

export default Room;
