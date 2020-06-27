import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Person } from '@material-ui/icons';

import useStyle from "./style.js";
import Layout from "../../components/layout/Layout";
import Chat from "../../containers/chat/Chat";
import Player from "../../components/player/Player";
import { currentTableSelector } from "../../redux/selectors/index";

const Game = () => {
  const classes = useStyle();
  const currentTable = useSelector(state => currentTableSelector(state));

  const renderPlayers = () => {
    if (currentTable && currentTable.players) {
      return currentTable.players.map((player, index) => (
        <Player
          key = {index}
          photo = {player.photo}
          name = {player.name}
        />
      ))
    }
  };

  return (
    <Layout>
      <Grid
        container
        className={classes.containerShift}
      >
        <Grid container className={classes.container}>
          <div className={classes.playersContainer}>
            { renderPlayers() }
          </div>
          <Person fontSize="large" />
          <Typography>{`${currentTable.players.length}/${currentTable.numberPlayers}`}</Typography>
        </Grid>
        <Grid container>
          <Chat chatOpen={true} type="G" />
        </Grid>
      </Grid>
    </Layout>
  )
};

export default Game;