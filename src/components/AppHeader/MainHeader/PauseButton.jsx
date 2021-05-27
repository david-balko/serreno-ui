import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { PauseIcon } from "./PauseIcon";

const useStyles = makeStyles(theme => ({
  pauseButton: {
    height: 36,
    width: 46,
    borderRadius: 18,
    backgroundColor: theme.palette.background,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}), { name: 'appHeader'})

export const PauseButton = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.pauseButton}>
      <PauseIcon style={{color: 'white', fontSize: 15}} />
    </div>
  )
}))
