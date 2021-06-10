import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { GraphEvents } from "./GraphEvents";
import { GraphIAP } from "./GraphIAP";
import { GraphIAPWide } from "./GraphIAPWide";
import { GraphTemp } from "./GraphTemp";
import { GraphTimeline } from "./GraphTimeline";
import { GraphUO } from "./GraphUO";
import { GraphUOWide } from "./GraphUOWide";

const useStyles = makeStyles(theme => ({
  graphView: {
    height: '100%',
    flex: '1 1 782px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background,
  }
}), { name: 'graphView'})

export const GraphView = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const classes = useStyles()

  return (
    <div className={classes.graphView}>
      
        <GraphTimeline />
        <GraphEvents />
        {AppStore.monitorFocus === 'UO' ?
        <GraphUOWide /> :
        <GraphUO />
        }
        {AppStore.monitorFocus === 'IAP' ?
        <GraphIAPWide /> :
        <GraphIAP />
        }
        <GraphTemp />
    </div>
  )
}))
