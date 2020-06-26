import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth, navbarHeight } from "../../consts/style";

const style = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
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
  },
  chatButtonContainer: {
    justifyContent: "flex-end",
    padding: 5,
  },
  playersContainer: {
    //width: "calc(100% - 50px)",
    width: "100%",
  },
  roomButtonContainer: {
    width: "50px",
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
