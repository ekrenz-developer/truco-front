import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, CardContent, CardActions, Button } from "@material-ui/core";

import useStyle from "./style.js";

const Table = ({ name, flower, numberPlayers, privated, password, players, points, timePerPLayer}) => {
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardContent className={classes.content}>
        <Typography variant="subtitle1">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" className={classes.button}>
          Jugar
        </Button>
      </CardActions>
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
