import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Typography, CardContent, CardActionArea, Button, CardMedia } from "@material-ui/core";
import { LocalFloristSharp, Person, Lock } from '@material-ui/icons';

import useStyle from "./style.js";

const Table = ({ 
  name, 
  flower, 
  numberPlayers, 
  privated, 
  password, 
  players, 
  points, 
  timePerPLayer,
  photo
}) => {
  const classes = useStyle();

  return (
    <Card className={classes.container}>
      <div className={classes.header}>
        <div className={classes.headerTitle}>
          <div className={classes.headerItem}>
            { privated && <Lock /> }
          </div>
          <CardMedia
            className={classes.media}
            image={photo}
            title={name}
          />
          <div className={classes.headerItem}>
            <Person />
            <Typography>{`${players.length}/${numberPlayers}`}</Typography>
          </div>
        </div>
        <Typography className={classes.title}>{name}</Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.item}>
          <Typography>{`${timePerPLayer}s`}</Typography> 
        </div>
        <div className={classes.item}>
          <Typography>{points}</Typography> 
        </div>
        { flower && <LocalFloristSharp className={classes.item} /> }
      </div>
      <CardActionArea className={classes.antions}>
        <Button size="small" color="primary" className={classes.button}>
          Jugar
        </Button>
      </CardActionArea>
    </Card>
  );
};

Table.propTypes = {
  name: PropTypes.string.isRequired,
  flower: PropTypes.bool.isRequired,
  numberPlayers: PropTypes.number.isRequired,
  privated: PropTypes.bool.isRequired,
  password: PropTypes.string,
  players: PropTypes.array.isRequired,
  points: PropTypes.number.isRequired,
  timePerPLayer: PropTypes.number.isRequired,
};

Table.defaultProps = {
  password: undefined,
};

export default Table;
