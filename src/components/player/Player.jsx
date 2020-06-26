import React from "react";
import { 
  Card, 
  CardHeader, 
  Typography,
  CardContent, 
  CardActionArea, 
  Button, 
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Avatar
} from "@material-ui/core";
import PropTypes from "prop-types";

import useStyle from "./style";

const Player = ({ name, photo }) => {
  const classes = useStyle();
  
  return (
    <Card className={classes.container}>
      <CardMedia
        className={classes.media}
        image={photo}
      />
      <div className={classes.content}>
        <Typography>{name}</Typography>
      </div>
    </Card>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Player;