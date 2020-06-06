import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../../consts/style";

const style = makeStyles((theme) => ({
  container: {
    height: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  chatRoomContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  tablesContainerMargin: {
    height: "100%",
    width: "100%",
  },
  tablesContainer: {
    padding: 10,
    height: "100%",
  },
  chatButtonContainer: {
    justifyContent: "flex-end",
    padding: 5,
  },
  roomTablesContainer: {
    width: "85%",
  },
  roomButtonContainer: {
    width: "15%",
  },
  containerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default style;
