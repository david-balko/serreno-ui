import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  sideBarTemp:{
    display: 'flex',
    color: theme.palette.temp.main,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    '& > p:nth-child(2)': {
      fontWeight: 300
    }
  }
}), { name: 'sideBar'})

export const SideBarTemp = inject('AppStore')(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={`sidebar-element ${classes.sideBarTemp}`}>
      <div className={classes.text}>
        <Typography variant="body2">
          {`Temp`}
        </Typography>
        <Typography variant="body2">
          {`C °`}
        </Typography>
      </div>
      <Typography variant="h2">
        {`37.1`}
      </Typography>
    </div>
  )
}))
