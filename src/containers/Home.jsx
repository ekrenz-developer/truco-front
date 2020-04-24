import React from 'react';

import Navbar from '../components/navbar/Navbar';
import RoomList from '../components/roomList/RoomList';

const Home = () => {
  const rooms = [
    {
      title: 'sala1'
    },
    {
      title: 'sala2'
    },
    {
      title: 'sala3'
    },
    {
      title: 'sala4'
    },
    {
      title: 'sala5'
    }
  ]
  return (
    <React.Fragment>
      <Navbar />
      <RoomList rooms = {rooms} />
    </React.Fragment>
  )
};

export default Home;