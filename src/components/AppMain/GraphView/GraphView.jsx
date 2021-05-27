import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  graphView: {
    width: 782,
    height: '100%',
  }
}), { name: 'graphView'})

export const GraphView = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.graphView}>

    </div>
  )
}))
