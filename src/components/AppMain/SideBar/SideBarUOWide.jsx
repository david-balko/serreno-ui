import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { useEffect, useState } from "react";

const useStyles = makeStyles(theme => ({
  sideBarUOWide: {
    color: theme.palette.uo.main,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column'
  },
  mainValue: {
    justifySelf: 'center',
    alignSelf: 'center',
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1 1 auto',
    // marginTop: 'auto',
  },
  totalText: {
    display: 'flex',
    flexDirection: 'column',
    '& > p:nth-child(2)': {
      fontWeight: 300,
      fontSize: ({ totalStartHour }) => totalStartHour.length > 1 ? 20 : 24
    }
  },
  totalCc: {
    fontWeight: 'bold',
  }
}), { name: 'sideBar'})

export const SideBarUOWide = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const [ totalStartHour, setTotalStartHour ] = useState(moment().subtract(AppStore.monitorTimeStep - 1, 'hours').format('HH'))

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalStartHour(moment().subtract(AppStore.monitorTimeStep - 1, 'hours').format('HH'))
    }, 60000)

    return () => {
      clearInterval(timer)
    }
  }, [AppStore.monitorTimeStep])

  useEffect(() => {
    setTotalStartHour(moment().subtract(AppStore.monitorTimeStep - 1, 'hours').format('HH'))
  }, [AppStore.monitorTimeStep])



  const classes = useStyles({ totalStartHour })

  return (
    <div className={`sidebar-element ${classes.sideBarUOWide} wide`}>
      <Typography>
        {`UO cc/h`}
      </Typography>
      <Typography variant="h1" className={classes.mainValue}>
        {35}
      </Typography>
      <div className={classes.total}>
        <div className={classes.totalText}>
          <Typography className={classes.totalCc}>
            {`Total CC`}
          </Typography>
          <Typography variant="body2">
            {`(since ${totalStartHour}:00)`}
            {/* {`(since 7:00)`} */}
          </Typography>
        </div>
        <Typography variant="h2">{`360`}</Typography>
      </div>
    </div>
  )
}))
