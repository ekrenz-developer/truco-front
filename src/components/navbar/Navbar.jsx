import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import useStyle from "./style.js";

const Navbar = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Truco
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.navbarRelleno} />
    </>
  );
};

export default Navbar;
