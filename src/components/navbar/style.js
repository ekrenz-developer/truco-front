import { makeStyles } from '@material-ui/core/styles';
import { navbarWidth } from '../../consts/style';

const style = makeStyles({
  title: {
    marginLeft: 8,
    flexGrow: 1
  },
  appBar: {
    height: navbarWidth
  }
})

export default style;