import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth, navbarHeight } from "../../consts/style";

const style = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: navbarHeight,
  },
});

export default style;
