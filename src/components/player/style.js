import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

const style = makeStyles({
  container: {
    margin: 7,
    //width: "150px",
    display: "flex",
    flexDirection: "row",
  },
  media: {
    height: "50px",
    width: "50px",
    //paddingTop: '56.25%', // 16:9
  },
  content: {
    display: "flex",
    height: "100%",
  },
});

export default style;
