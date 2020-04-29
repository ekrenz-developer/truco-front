import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth, navbarWidth } from '../../consts/style';

const style = makeStyles({
  container: {
    height: '100%',
    width: '100%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    top: navbarWidth
  }
})

export default style;