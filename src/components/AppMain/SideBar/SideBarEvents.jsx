import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  sideBarEvents: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 53,
    color: theme.palette.events.main,
  },
}), { name: 'sideBar'})

export const SideBarEvents = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={`sidebar-element ${classes.sideBarEvents}`}>
      <Typography>
        {`Events`}
      </Typography>
    </div>
  )
}))
