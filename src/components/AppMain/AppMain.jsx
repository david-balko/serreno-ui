import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { GraphView } from "./GraphView/GraphView";
import { SideBar } from "./SideBar/SideBar";

const useStyles = makeStyles(theme => ({
  appMain: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'stretch'
  },
}), { name: 'appMain'})

export const AppMain = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.appMain}>
      <GraphView />
      <SideBar />
    </div>
  )
}))
