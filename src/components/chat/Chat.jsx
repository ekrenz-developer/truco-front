import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Drawer, List, TextField, ListItem, ListItemText, IconButton, Toolbar } from "@material-ui/core";
import { Send, Close } from "@material-ui/icons";

import useStyle from "./style.js";

const Chat = ({ show }) => {
  const classes = useStyle();
  const [chatOpen, setChatOpen] = useState(true);
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

  const handleCloseChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={chatOpen}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.header}>
        <Typography className={classes.title}>Chat</Typography>
        <IconButton
          className={classes.close}
          onClick={handleCloseChat}
        >
          <Close />
        </IconButton>
      </div>
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
  show: PropTypes.bool.isRequired,
};

export default Chat;
