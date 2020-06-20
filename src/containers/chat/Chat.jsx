import React, { useState, useRef, useEffect, createRef } from "react";
import { Typography, Drawer, List, TextField, ListItem, ListItemText, IconButton, RootRef } from "@material-ui/core";
import { Send, Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";

import useStyle from "./style.js";

const useScroll = () => {
  const htmlElRef = useRef();
  const executeScroll = () => {
    console.log(htmlElRef);
    //console.log(htmlElRef)
    //window.scrollTo(0, htmlElRef.current.offsetTop)
    /*
    window.scrollTo({
      top: htmlElRef.current.offsetTop,
      left: 0,
      behavior: "smooth"
    })
    */
    //htmlElRef.scrollIntoView({ behavior: "smooth" });
  }

  return [executeScroll, htmlElRef]
}

const Chat = ({ chatOpen, type }) => {
  const classes = useStyle();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  //const [executeScroll, htmlElRef] = useScroll()
  const scrollRef = createRef();

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
      handleScrollToBottom();
    }
  };

  const handleChangeMessage = (event) => {
    setNewMessage(event.target.value);
  }

  const handleScrollToBottom = () => {
    //console.log(messages.length);
    //scrollRef.current.scrollTo(0, messages.length);
    scrollRef.current.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={chatOpen}
      className={classes.drawer}
      classes={ type == "G" ?
        { paper: classes.drawerPaperGame } : 
        { paper: classes.drawerPaper }
      }
      /*
      classes={clsx({ paper: classes.drawerPaper }, {
        [{ paper: classes.drawerPaperGame }]: type === "G",
        })
      }
      */
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
        
        <div className={{ height: "36px"}} ref={scrollRef} />
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
  type: PropTypes.string,
};

Chat.defaultProps = {
  chatOpen: false,
  type: "R",
};

export default Chat;
