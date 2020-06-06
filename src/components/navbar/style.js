import { makeStyles } from "@material-ui/core/styles";
import { navbarHeight } from "../../consts/style";

const style = makeStyles({
  title: {
    marginLeft: 8,
    flexGrow: 1,
  },
  appBar: {
    height: navbarHeight,
  },
  navbarRelleno: {
    height: navbarHeight,
  },
});

export default style;
