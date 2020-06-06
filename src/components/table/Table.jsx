import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, CardContent, CardActions, Button } from "@material-ui/core";

import useStyle from "./style.js";

const Table = ({ name }) => {
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
  name: PropTypes.string,
};

Table.defaultProps = {
  name: "table",
};

export default Table;
