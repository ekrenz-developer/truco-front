import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
  container: {
    margin: 7,
    width: "150px",
  },
  media: {
    height: "50px",
    width: "40%",
  },
  content: {
    alignItems: "center",
    height: "30px",
    display: "flex",
    flexDirection: "row",
  },
  header: {
    textAlign: "center",
    height: "70px",
    padding: "2.5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  title: {
    width: "100%",
    fontSize: "15px",
    lineHeight: "1",
    padding: "2.5px",
  },
  antions: {
    height: "20px",
  },
  button: {
    textAlign: "center",
    height: "100%",
    width: "100%",
  },
  item: {
    width: "33%",
    textAlign: "center",
  },
  headerItem: {
    width: "30%",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default style;
