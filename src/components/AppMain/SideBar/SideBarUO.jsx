import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  sideBarUO:{
    display: 'flex',
    color: theme.palette.uo.main,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
}), { name: 'sideBar'})

export const SideBarUO = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const setUOMonitorFocus = () => {
    AppStore.setMonitorFocus('UO')
  }

  const classes = useStyles()

  return (
    <div id="sidebar-uo" className={`sidebar-element ${classes.sideBarUO}`} onClick={setUOMonitorFocus}>
      <div className={classes.header}>
        <Typography >
          {`UO`}
        </Typography>
        <Typography >
          {`cc/h`}
        </Typography>
      </div>
      <Typography variant="h2">
        {`35`}
      </Typography>
    </div>
  )
}))
