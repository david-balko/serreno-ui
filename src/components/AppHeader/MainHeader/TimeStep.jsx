import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  timeStep: {
    width: 121,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.palette.headers,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '& > *': {
      flexBasis: 'calc(100% / 3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  hours: {
    fontSize: ({monitorTimeStep}) => monitorTimeStep > 9 ? 20 : 24,
    fontWeight: 'normal',

  }
}), { name: 'appHeader'})

export const TimeStep = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const classes = useStyles({ monitorTimeStep: AppStore.monitorTimeStep })

  return (
    <div className={classes.timeStep}>
      <Typography variant="subtitle2" onClick={() => AppStore.setMonitorTimeStep(AppStore.monitorTimeStep - 1)}>{`-`}</Typography>
      <Typography className={classes.hours} >{`${AppStore.monitorTimeStep} h`}</Typography>
      <Typography variant="subtitle2" onClick={() => AppStore.setMonitorTimeStep(AppStore.monitorTimeStep + 1)}>{`+`}</Typography>
    </div>
  )
}))
