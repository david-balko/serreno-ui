import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  bedOuter: {
  },
  bedInner: {
    width: 'calc(100% - 5px)',
    height: 'calc(100% - 5px)',
    margin: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 1)'
  }
}), { name: 'appInit'})

export const Bed = inject('AppStore')(observer((props) =>  {

  const { bedNumber } = props

  const classes = useStyles()

  return (
    <div className={classes.bedOuter}>
      <div className={classes.bedInner} style={{}}>
        <Typography>
          {bedNumber}
        </Typography>
      </div>
    </div>
  )
}))
