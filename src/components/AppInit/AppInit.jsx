import { makeStyles } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { BedSelect } from "./BedSelect/BedSelect";
import { ConnectionsCheck } from "./ConnectionsCheck/ConnectionsCheck";
import { ParamsSelect } from "./ParamsSelect/ParamsSelect";
import { WeightSelect } from "./WeightSelect/WeightSelect";

const useStyles = makeStyles(theme => ({
  appInit: {
    height: '100%'
  },
}), { name: 'appInit'})

export const AppInit = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const classes = useStyles()

  return (
    <div className={classes.appInit}>
      {AppStore.appInitStage === 'bed' && <BedSelect />}
      {AppStore.appInitStage === 'weight' && <WeightSelect />}
      {AppStore.appInitStage === 'params' && <ParamsSelect />}
      {AppStore.appInitStage === 'connections' && <ConnectionsCheck />}
    </div>
  )
}))
