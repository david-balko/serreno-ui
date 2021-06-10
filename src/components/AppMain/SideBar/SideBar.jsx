import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { SideBarEvents } from "./SideBarEvents";
import { SideBarIAP } from "./SideBarIAP";
import { SideBarIAPWide } from "./SideBarIAPWide";
import { SideBarTemp } from "./SideBarTemp";
import { SideBarUO } from "./SideBarUO";
import { SideBarUOWide } from "./SideBarUOWide";

const useStyles = makeStyles(theme => ({
  sideBar: {
    height: '100%',
    // width: 242,
    display: 'flex',
    backgroundColor: theme.palette.background,
    flexDirection: 'column',
    flex: '0 0 242px',
    boxShadow: '-7px 7px 9px 0px rgb(23 27 62 / 88%)',
    zIndex: 2,
    '& .sidebar-element:nth-child(even)': {
      borderTop: '1px solid #393C65',
      borderBottom: '1px solid #393C65',
    },
    '& > .sidebar-element': {
      paddingLeft: 17,
      paddingRight: 17,
      display: 'flex',
      alignItems: 'center',
      flex: '3 1 auto'
    },
    '& > .sidebar-element:first-child': {
      flex: '0 1 auto'
    },
    '& > .wide': {
      flex: '3 1 auto',
      display: 'flex',
      alignItems: 'stretch',
      paddingTop: 15,
      justifyContent: 'space-between'

    }
  },
  sideBarHead: {
    backgroundColor: theme.palette.headers,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBarHeadText: {
    lineHeight: 1.3
  }
}), { name: 'sideBar'})

export const SideBar = inject('AppStore', 'GraphStore')(observer((props) =>  {

  const { AppStore, GraphStore } = props

  const updateSize = () => {
    setTimeout(() => {
      GraphStore.setSideBarRefs({
        headRef: document.getElementById('sidebar-head'),
        eventsRef: document.getElementById('sidebar-events'),
        uoWideRef: document.getElementById('sidebar-uo-wide'),
        uoRef: document.getElementById('sidebar-uo'),
        iapWideRef: document.getElementById('sidebar-iap-wide'),
        iapRef: document.getElementById('sidebar-iap'),
        tempRef: document.getElementById('sidebar-temp'),
        sideBar: document.getElementById('sidebar')
      })
    }, 30)
  }

  useEffect(() => {
    updateSize()
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    };
  })

  const classes = useStyles()

  return (
    <div  id="sidebar" className={classes.sideBar}>
      <div id="sidebar-head" className={`sidebar-element ${classes.sideBarHead}`}>
        <Typography variant="subtitle1" className={classes.sideBarHeadText}>
          {`Monitoring `}
        </Typography>
      </div>
      <SideBarEvents />
      {AppStore.monitorFocus === 'UO' ?
        <SideBarUOWide /> :
        <SideBarUO />
      }
      {AppStore.monitorFocus === 'IAP' ?
        <SideBarIAPWide /> :
        <SideBarIAP />
      }
      <SideBarTemp />
    </div>
  )
}))
