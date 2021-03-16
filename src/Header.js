import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import './Header.css';

export default () => {
    let history = useHistory()
    const redirectHome = () => {
      history.push('/main')
      history.go(0)
    }
  
    return (
      <header className="header">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs>
          <Grid item xs="2"/> <Button onClick={redirectHome}><b>Cat's lovers</b></Button>  <Grid item xs /> 
          </Grid>
          <Grid item xs /> <Grid item xs />  <Grid item xs />  <Grid item xs /> <Grid item xs /> <Grid item xs /> 
          <Grid item xs /> <Grid item xs />  <Grid item xs />  <Grid item xs /> <Grid item xs /> <Grid item xs /> 
          <Grid item xs /> <Button onClick={redirectHome}>All breeds</Button>  <Grid item xs /> 
          <Grid item xs /> <Button onClick={redirectHome}>My favourites</Button>  <Grid item xs />
        </Grid>
      </header>
    );
  }