import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getTablesAction, setCurrentRoomAction, getRandomRoomAction } from '../../redux/actions/room.action';
import {
  isTablesLoading, 
  tablesResult, 
  isRandomRoomLoadingSelector, 
  randomRoomSelector,
  currentRoomSelector
} from "../../redux/selectors/index";
import useStyle from "./style.js";
import Table from "../../components/table/Table";
import Chat from "../chat/Chat";
import Navbar from "../navbar/Navbar";
import Layout from "../../components/layout/Layout";

const Room = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const tables = useSelector(state => tablesResult(state));
  const isLoading = useSelector(state => isTablesLoading(state));
  const isRandomRoomLoading = useSelector(state => isRandomRoomLoadingSelector(state));
  const randomRoom = useSelector(state => randomRoomSelector(state));
  const currentRoom = useSelector(state => currentRoomSelector(state));
  const [chatOpen, setChatOpen] = useState(false);

  const handleChatOpen = () => {
    setChatOpen(!chatOpen);
  };

  const handleEntryGame = (id, password = undefined) => {
    // logica para verificar clave de ingreso de mesa privada
    //let id = event.currentTarget.ariaLabel;
    if (!password) {
      console.log(`Ingreso a mesa: ${id}`);
    } else {
      console.log(`Ingreso a mesa privada: ${id}`);
    }

    history.push("/game");
  }

  useEffect(() => {
    //if (room && !tables) {
      //console.log("aca");
    //}
    if (!randomRoom) {
      dispatch(getRandomRoomAction());
    }
    //console.log("salaa random " + randomRoom);
    if (!isRandomRoomLoading && randomRoom) {
      //let room = 3;
      if (!currentRoom) {
        dispatch(setCurrentRoomAction(randomRoom));
      }
      if (currentRoom && !tables) {
        dispatch(getTablesAction(currentRoom));
      }
    }
  }, [randomRoom, isRandomRoomLoading, currentRoom])

  const renderTables = () => {
    if (!isLoading && tables) {
      return tables.map((table) => (
        <Table 
          key={table._id}
          id={table._id}
          name={table.name}
          flower={table.flower}
          numberPlayers={table.numberPlayers}
          privated={table.private}
          players={table.players}
          points={table.points}
          timePerPLayer={table.timePerPlayer}
          photo={"https://res.cloudinary.com/ekrenz/image/upload/v1591319195/truco/MYtinUser05_w1plaa.png"}
          handleEntryGame={handleEntryGame}
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
