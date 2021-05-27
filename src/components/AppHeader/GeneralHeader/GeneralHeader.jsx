import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { BatteryIcon } from "./BatteryIcon";
import { MenuIcon } from "./MenuIcon";
import { WifiIcon } from "./WifiIcon";

const useStyles = makeStyles(theme => ({
  generalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 210,
    height: '100%',
    textAlign: 'center'

  },
  batteryIcon: {
    transform: 'rotate(180deg)'
  },
}), { name: 'appHeader'})

export const GeneralHeader = inject()(observer((props) =>  {

  const [time, setTime] = useState(moment().local().format('kk:mm'))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().local().format('kk:mm'))
    }, 60000)

    return () => {
      clearInterval(timer)
    }
  })

  const classes = useStyles()

  return (
    <div className={classes.generalHeader}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Typography variant="subtitle2">{time}</Typography>
      </div>
      <WifiIcon />
      <BatteryIcon className={classes.batteryIcon} />
      <MenuIcon />
    </div>
  )
}))
