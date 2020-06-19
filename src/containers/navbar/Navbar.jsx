import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Menu, 
  MenuItem, 
  Zoom,
  Dialog,
  List,
  ListItem,
  ListItemText,
  CircularProgress
} from "@material-ui/core";
import { MeetingRoom, AccountCircle, Chat } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { getRoomsAction} from '../../redux/actions/room.action';
import { isRoomsLoading, roomsResult } from "../../redux/selectors/index";
import useStyle from "./style.js";

const Navbar = ({ chat, handleChatOpen }) => {
  const classes = useStyle();
  const [userMenu, setUserMenu] = useState(false);
  const [posUserMenu, setPosUserMenu] = useState(null);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const dispatch = useDispatch();
  const rooms = useSelector(state => roomsResult(state));
  const isLoading = useSelector(state => isRoomsLoading(state));

  const handleUserMenu = (event) => {
    setUserMenu(!userMenu);
    setPosUserMenu(!userMenu ? event.currentTarget : null);
  };

  const handleRoomsOpen = () => {
    setRoomsOpen(!roomsOpen);
    if (!roomsOpen) {
      dispatch(getRoomsAction());
    };
  };

  const handleEntryRoom = (id) => () => {
    console.log(`Entro a la sala: ${id}`);
  };

  const renderRooms = () => {
    if (!isLoading && rooms) {
      return rooms.map((room) => (
        <ListItem
          key={room._id}
          button
          onClick={handleEntryRoom(room._id)}
        >
          <ListItemText className={classes.room}>{ room.name }</ListItemText>
        </ListItem>
      ))
    } else {
      return <CircularProgress color={"primary"} size={50} />
    }
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/*
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          */
          }
          <Typography className={classes.title} variant="h6">
            Truco
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleRoomsOpen}
          >
            <MeetingRoom />
            <Typography>Sala 1</Typography>
          </IconButton>
          {chat &&
            /*
            <Zoom
              timeout={transitionDuration}
              in={!chatOpen}
              unmountOnExit
              style={{
                transitionDelay: `${!chatOpen ? transitionDuration.exit : 0}ms`,
              }}
            >*/
              <IconButton
                color="inherit"
                edge="end"
                aria-label="chat"
                onClick={handleChatOpen}
              >
                <Chat fontSize="small" />
              </IconButton>
            /*</Zoom>*/
          }
          <IconButton
            edge="end"
            color="inherit"
            aria-controls="user-menu"
            aria-haspopup="true"
            onClick={handleUserMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="user-menu"
            open={userMenu}
            onClose={handleUserMenu}
            anchorEl={posUserMenu}
          >
            <MenuItem><Typography>Profile</Typography></MenuItem>
            <MenuItem><Typography>My account</Typography></MenuItem>
            <MenuItem><Typography>Logout</Typography></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.navbarRelleno} />
      <Dialog
        open={roomsOpen}
        onClose={handleRoomsOpen}
        aria-labelledby="form-dialog-title"
      >
        <List className={classes.rooms}>
          { renderRooms() }
        </List>
      </Dialog>
    </>
  );
};

Navbar.propTypes = {
  chat: PropTypes.bool,
  handleChatOpen: PropTypes.func,
};

Navbar.defaultProps = {
  chat: false,
  handleChatOpen: () => {},
};

export default Navbar;