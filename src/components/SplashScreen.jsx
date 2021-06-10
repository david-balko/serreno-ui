import { CircularProgress, makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import SerrenoLogo from '../assets/images/serrenoLogo.png';

const useStyles = makeStyles(theme => ({
  splashScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  logo: {
    width: 394
  },
  tzurLogo: {
    width: 87,
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing()
  }
}), { name: 'splashScreen'})

export const SplashScreen = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <>
      <div className={classes.splashScreen}>
          <img src={SerrenoLogo} className={classes.logo} alt="serreno-logo" />
          <CircularProgress size={75} thickness={5} />
      </div>
    </>
  )
}))
