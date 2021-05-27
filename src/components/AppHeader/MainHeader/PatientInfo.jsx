import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  patientInfo: {
    whiteSpace: 'pre-line',
    lineHeight: 0.9
  }
}), { name: 'appHeader'})

export const PatientInfo = inject('MonitorStore')(observer((props) =>  {

  const { MonitorStore } = props

  const classes = useStyles()

  return (
    <Typography variant="subtitle2" className={classes.patientInfo}>
      {`${MonitorStore.bedNumber}`}
      {MonitorStore.patientWeight > 0 && `,\n${MonitorStore.patientWeight} kg`}
    </Typography>
  )
}))
