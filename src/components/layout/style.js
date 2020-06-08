import { makeStyles } from "@material-ui/core/styles";
import { navbarHeight } from "../../consts/style";

const style = makeStyles({
  header: {},
  content: {
    width: "100%",
    flexGrow: 1,
    height: "100%"
  },
  contentWithHeader: {
    width: "100%",
    flexGrow: 1,
    height: `calc(100% - ${navbarHeight}px)`
  },
  footer: {},
});

export default style;
