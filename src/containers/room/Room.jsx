import React, { useState, useEffect } from "react";
import { Grid, Fab, CircularProgress } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { getTables } from '../../redux/actions/table.action';
import { isTablesLoading, tablesResult } from "../../redux/selectors/index";
import useStyle from "./style.js";
import Table from "../../components/table/Table";
import Chat from "../../components/chat/Chat";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";

const Room = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const tables = useSelector(state => tablesResult(state));
  console.log(tables)
  const isLoading = useSelector(state => isTablesLoading(state));
  const room = {_id: 1}

  const [chatOpen, setChatOpen] = useState(false);

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
        />
      ));
    } else {
      return <CircularProgress color={"primary"} size={100} />
    }
  };

  return (
    <Layout header={<Navbar />}>
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
              {/*
              {isTablesLoading && <div className={classes.header}>{header}</div>}
              {tables.map((table) => (
                <Table key={table._id} name={table.name} />
              ))}
              */}
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
    </Layout>
  );
};

export default Room;
