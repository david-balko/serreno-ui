import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  sideBarIAP:{
    display: 'flex',
    color: theme.palette.iap.main,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    '& > p:nth-child(2)': {
      fontWeight: 300
    }
  }
}), { name: 'sideBar'})

export const SideBarIAP = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const setIAPMonitorFocus = () => {
    AppStore.setMonitorFocus('IAP')
  }

  const classes = useStyles()

  return (
    <div className={`sidebar-element ${classes.sideBarIAP}`} onClick={setIAPMonitorFocus}>
      <div className={classes.text}>
        <Typography variant="body2">
          {`IAP`}
        </Typography>
        <Typography variant="body2">
          {`mmHg`}
        </Typography>
      </div>
      <Typography variant="h2">
        {`9.2`}
      </Typography>
    </div>
  )
}))
