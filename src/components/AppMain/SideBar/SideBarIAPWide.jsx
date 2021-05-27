import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  sideBarIAPWide: {
    color: theme.palette.iap.main,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    fontWeight: 'bold'
  },
  mainValue: {
    alignSelf: 'center'
  },
}), { name: 'sideBar'})

export const SideBarIAPWide = inject('AppStore')(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={`sidebar-element ${classes.sideBarIAPWide} wide`}>
      <Typography className={classes.header}>
        {`IAP mmHg`}
      </Typography>
      <Typography variant="h1" className={classes.mainValue}>
        {35}
      </Typography>
    </div>
  )
}))
