import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Zoom } from "@material-ui/core";
import { MeetingRoom, AccountCircle, Chat } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useTheme } from '@material-ui/core/styles';

import useStyle from "./style.js";

const Navbar = ({ chat, handleChatOpen }) => {
  const classes = useStyle();
  const [userMenu, setUserMenu] = useState(false);
  const [posUserMenu, setPosUserMenu] = useState(null);
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const handleUserMenu = (event) => {
    setUserMenu(!userMenu);
    setPosUserMenu(!userMenu ? event.currentTarget : null);
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
          <IconButton edge="end" color="inherit">
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