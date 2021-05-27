import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { SideBarEvents } from "./SideBarEvents";
import { SideBarIAP } from "./SideBarIAP";
import { SideBarIAPWide } from "./SideBarIAPWide";
import { SideBarTemp } from "./SideBarTemp";
import { SideBarUO } from "./SideBarUO";
import { SideBarUOWide } from "./SideBarUOWide";

const useStyles = makeStyles(theme => ({
  sideBar: {
    height: '100%',
    // maxHeight
    width: 242,
    display: 'flex',
    backgroundColor: theme.palette.background,
    flexDirection: 'column',
    flex: '1 1 242px',
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

export const SideBar = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const classes = useStyles()

  return (
    <div className={classes.sideBar}>
      <div className={`sidebar-element ${classes.sideBarHead}`}>
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
