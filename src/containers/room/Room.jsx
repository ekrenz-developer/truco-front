import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { getTables } from '../../redux/actions/table.action';
import { isTablesLoading, tablesResult } from "../../redux/selectors/index";
import useStyle from "./style.js";
import Table from "../../components/table/Table";
import Chat from "../chat/Chat";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";

const Room = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const tables = useSelector(state => tablesResult(state));
  const isLoading = useSelector(state => isTablesLoading(state));
  const [chatOpen, setChatOpen] = useState(false);
  const room = {_id: 1}

  const handleChatOpen = () => {
    setChatOpen(!chatOpen);
  };

  useEffect(() => {
    if (room && !tables) {
      dispatch(getTables({ room }));
    }
  })

  const renderTables = () => {
    if (!isLoading && tables) {
      return tables.map((table) => (
        <Table 
          key={table._id}
          name={table.name}
          flower={table.flower}
          numberPlayers={table.numberPlayers}
          privated={table.private}
          password={table.password}
          players={table.players}
          points={table.points}
          timePerPLayer={table.timePerPlayer}
          photo={"https://res.cloudinary.com/ekrenz/image/upload/v1591319195/truco/MYtinUser05_w1plaa.png"}
        />
      ));
    } else {
      return <CircularProgress color={"primary"} size={100} />
    }
  };

  return (
    <>
      <Layout 
        header={
          <Navbar 
            chat={true}
            handleChatOpen={handleChatOpen}
          />
        }>
        <Grid
          container
          className={clsx(classes.container, {
            [classes.containerShift]: chatOpen,
          })}
        >
          <Grid container className={classes.container}>
            <Grid item className={classes.roomTablesContainer}>
              <Grid container className={classes.tablesContainer}>
                { renderTables() }
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Chat chatOpen={chatOpen} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Room;
