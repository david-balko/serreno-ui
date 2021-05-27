import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { Connections } from "./Connections";
import { PatientInfo } from "./PatientInfo";
import { PauseButton } from "./PauseButton";
import { TimeStep } from "./TimeStep";
import { ViewSwitcher } from "./ViewSwitcher";

const useStyles = makeStyles(theme => ({
  headerButtons: {
    display: 'flex',
    flexDirection: 'row', 
    minWidth: 314,
    justifyContent: 'space-between'
  }
}), { name: 'appHeader'})

export const MainHeader = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <>
      <PatientInfo />
      <Connections />
      <div style={{width: 15}}></div>
      <div className={classes.headerButtons}>
        <PauseButton />
        <TimeStep />
        <ViewSwitcher />
      </div>
    </>
  )
}))
