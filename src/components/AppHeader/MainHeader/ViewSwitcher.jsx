import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { GraphIcon } from "./GraphIcon";
import { GridIcon } from "./GridIcon";

const useStyles = makeStyles(theme => ({
  viewSwitcher: {
    width: 106,
    height: 36,
    backgroundColor: '#efefff',
    boxShadow: 'inset 0 0 8px 0 rgba(23, 27, 62, 0.24)',
    border: 'solid 1px #ffffff',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    
  },
  selected: {
    width: 54,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.palette.headers,
    marginLeft: 0,
    marginRight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: theme.palette.headers
  }
}), { name: 'appHeader'})

export const ViewSwitcher = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const classes = useStyles()

  return (
    <div className={classes.viewSwitcher}>
      {AppStore.monitorView === 'graph'
      ? 
        <>
          <div className={classes.selected}>
            <GraphIcon style={{color: 'white'}} />
          </div>
          <GridIcon className={classes.icon} onClick={() => AppStore.setMonitorView('grid')} />
        </>
      :
        <>
          <GraphIcon className={classes.icon} onClick={() => AppStore.setMonitorView('graph')} />
          <div className={classes.selected}>
            <GridIcon style={{color: 'white'}} />
          </div>
        </>
      }
    </div>
  )
}))
