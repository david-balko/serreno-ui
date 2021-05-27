import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  numberOuter: {
  },
  numberInner: {
    width: 'calc(100% - 5px)',
    height: 'calc(100% - 5px)',
    margin: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 1)'
  }
}), { name: 'appInit'})

export const Number = inject('AppStore')(observer((props) =>  {

  const { number } = props

  const classes = useStyles()

  return (
    <div className={classes.numberOuter}>
      <div className={classes.numberInner} style={{}}>
        <Typography>
          {number}
        </Typography>
      </div>
    </div>
  )
}))
