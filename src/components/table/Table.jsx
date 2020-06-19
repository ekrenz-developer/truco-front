import React, { useState } from "react";
import PropTypes from "prop-types";
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
  TextField
} from "@material-ui/core";
import { LocalFloristSharp, Person, Lock } from '@material-ui/icons';

import useStyle from "./style.js";

const Table = ({ 
  id,
  name, 
  flower, 
  numberPlayers, 
  privated,
  players, 
  points, 
  timePerPLayer,
  photo,
  handleEntryGame
}) => {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState(false);
  const [password, setPassword] = useState(undefined);

  const handleOpenDialog = () => {
    if (privated) {
      setOpenDialog(!openDialog);
    } else {
      handleEntry(id);
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEntry = () => {
    handleEntryGame(id, password);
  };

  return (
    <>
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
          <Button
            size="small"
            color="primary"
            className={classes.button}
            onClick={handleOpenDialog}
          >
            Jugar
          </Button>
        </CardActionArea>
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleOpenDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Datos de la mesa
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Contraseña"
            type="password"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleOpenDialog}
            color="primary"
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleEntry}
            color="primary"
          >
            Entrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Table.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  flower: PropTypes.bool.isRequired,
  numberPlayers: PropTypes.number.isRequired,
  privated: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  points: PropTypes.number.isRequired,
  timePerPLayer: PropTypes.number.isRequired,
  handleEntryGame: PropTypes.func.isRequired,
};

Table.defaultProps = {
  password: undefined,
};

export default Table;
