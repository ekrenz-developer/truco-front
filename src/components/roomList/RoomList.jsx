/*
import React from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile, Button } from "@material-ui/core";

import style from "./style.js";

const RoomList = ({ rooms }) => {
  const classes = style();
  return (
    <GridList className={classes.roomList} cols={4.5} cellHeight={45}>
      {rooms.map((room) => (
        <GridListTile className={classes.roomContainer} key={room.id}>
          <Button className={classes.roomButton} variant="outlined" color="primary">
            {room.title}
          </Button>
        </GridListTile>
      ))}
    </GridList>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
};

export default RoomList;
*/
