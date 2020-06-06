import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

// import { openChat, closeChat } from '../../redux/actions/chat.action';
// import { isChatOpen } from '../../redux/selectors/index';
import useStyle from "./style.js";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const rooms = [
    {
      id: 1,
      title: "sala1",
    },
    {
      id: 2,
      title: "sala2",
    },
    {
      id: 3,
      title: "sala3",
    },
    {
      id: 4,
      title: "sala4",
    },
    {
      id: 5,
      title: "sala5",
    },
  ];
  const currentRoom = {
    id: 1,
    name: "sala1",
  };

  const classes = useStyle();
  // const dispatch = useDispatch();
  // const chatOpen = useSelector(state => isChatOpen(state));
  const [chatOpen, setChatOpen] = useState(false);

  const handleChatOpen = (event) => {
    /*
    const payload = { isChatOpen: !chatOpen };
    dispatch(chatOpen ? closeChat(payload) : openChat(payload));
    */
    setChatOpen(!chatOpen);
  };
  /*
    <Chat show={chatOpen} />
  */
  return (
    <Layout header={<Navbar />} footer={<Footer />}>
      <Room {...currentRoom} />
    </Layout>
    /*
    <React.Fragment>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item className={classes.room}>
          <Room {...currentRoom} />
        </Grid>
        {/*
        <Grid item className={classes.header}> 
          <RoomList rooms={rooms} />
        </Grid>
        
      </Grid>
      
      <Footer />
    </React.Fragment>
    */
  );
};

export default Home;
