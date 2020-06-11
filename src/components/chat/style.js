import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth, navbarHeight } from "../../consts/style";

const inputContainerHeight = "40";
const send = "44";
const headerHeight = "40";
const closeButtonWidth = "40";

const style = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  drawerPaper: {
    width: drawerWidth,
    top: navbarHeight,
    height: `calc(100% - ${navbarHeight}px)`,
  },
  list: {
    height: `calc(100% - ${inputContainerHeight}px - ${headerHeight}px)`,
    overflowY: "scroll"
  },
  input: {
    height: "70%",
    width: `calc(100% - ${send}px)`,
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: `${inputContainerHeight}px`,
    borderTopStyle: "ridge",
    borderTopWidth: "1px",
    boxShadow: "0px -4px 7px -5px rgba(163,157,163,1)",
  },
  send: {
    height: "100%",
    width: `${send}px`,
  },
  header: {
    width: "100%",
    height: `${headerHeight}px`,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
  },
  close: {
    height: "100%",
    width: `${closeButtonWidth}px`,
  },
  title: {
    height: "100%",
    width: `calc(100% - ${closeButtonWidth}px)`,
    textAlign: "center",
    padding: "8px",
    boxSizing: "border-box",
  }
});

export default style;
