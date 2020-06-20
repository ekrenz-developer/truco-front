import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import useStyle from "./style.js";
import Layout from "../../components/layout/Layout";
import Chat from "../../containers/chat/Chat";

const Game = () => {
  const classes = useStyle();

  return (
    <Layout>
        <Grid
          container
          className={classes.containerShift}
        >
          <Grid container className={classes.container}>
            <Grid item className={classes.roomTablesContainer}>

            </Grid>
          </Grid>
          <Grid container>
            <Chat chatOpen={true} type="G" />
          </Grid>
        </Grid>
    </Layout>
  )
};

export default Game;