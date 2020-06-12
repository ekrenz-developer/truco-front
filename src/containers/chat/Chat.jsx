import React, { useState } from "react";
import { Typography, Drawer, List, TextField, ListItem, ListItemText, IconButton } from "@material-ui/core";
import { Send, Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import useStyle from "./style.js";

const Chat = ({ chatOpen }) => {
  const classes = useStyle();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessageEnter = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (newMessage) {
      let tempMessages = [...messages];
      tempMessages.push(newMessage);
      setMessages(tempMessages);
      setNewMessage("");
    }
  };

  const handleChangeMessage = (event) => {
    setNewMessage(event.target.value);
  }

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={chatOpen}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      {/*
      <div className={classes.header}>
        <Typography className={classes.title}>Chat</Typography>
        <IconButton
          className={classes.close}
          onClick={handleChatOpen}
        >
          <Close />
        </IconButton>
      </div>
      */}
      <List className={classes.list} disablePadding={true} dense>
        {
          messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText>{message}</ListItemText>
            </ListItem>
          ))
        }
      </List>
      <div className={classes.inputContainer}>
        <TextField
          id="standard-basic" 
          className={classes.input}
          onChange={handleChangeMessage}
          autoFocus={true}
          value={newMessage}
          onKeyPress={handleSendMessageEnter}
        />
        <IconButton className={classes.send} onClick={handleSendMessage}>
          <Send />
        </IconButton>
      </div>
    </Drawer>
  );
};

Chat.propTypes = {
  chatOpen: PropTypes.bool,
};

Chat.defaultProps = {
  chatOpen: false,
};

export default Chat;
