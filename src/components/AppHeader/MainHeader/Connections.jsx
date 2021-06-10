import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { BagIcon } from "./BagIcon";
import { CheckMarkIcon } from "./CheckMarkIcon";
import { ExpendableIcon } from "./ExpendableIcon";
import { ThermometerIcon } from "./ThermometerIcon";

const useStyles = makeStyles(theme => ({
  connections: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 260,
  },
  checkMark: {
    fontSize: 22,
    color: '#00c6a1',
    marginLeft: -15
  }
}), { name: 'appHeader'})

export const Connections = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.connections}>
      <div>
        <ExpendableIcon />
        <CheckMarkIcon className={classes.checkMark} />
      </div>
      <div>
        <BagIcon />
        <CheckMarkIcon className={classes.checkMark} />
      </div>
      <div>
        <ExpendableIcon />
        <CheckMarkIcon className={classes.checkMark} />
      </div>
      <div>
        <ThermometerIcon />
        <CheckMarkIcon className={classes.checkMark} />
      </div>
    </div>
  )
}))
