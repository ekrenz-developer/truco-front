import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getTables } from '../../redux/actions/table.action';
// import { openChat, closeChat } from '../../redux/actions/chat.action';
// import { isChatOpen } from '../../redux/selectors/index';
import useStyle from "./style.js";
import Navbar from "../../components/navbar/Navbar";
import Room from "../../components/room/Room";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const dispatch = useDispatch();
  
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
  return (
    <Layout header={<Navbar />}>
      <Room {...currentRoom} />
    </Layout>
  );
};

export default Home;
