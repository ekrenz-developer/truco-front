import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { MeetingRoom, AccountCircle } from "@material-ui/icons";

import useStyle from "./style.js";

const Navbar = () => {
  const classes = useStyle();
  const [userMenu, setUserMenu] = useState(false);
  const [posUserMenu, setPosUserMenu] = useState(null);

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

export default Navbar;
