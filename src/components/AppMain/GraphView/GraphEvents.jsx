import { makeStyles, useTheme } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from "recharts";
import { cssConstants } from "../../../consts/theme";
import { BedIcon } from '../EventIcons/BedIcon'
import { DropIcon } from "../EventIcons/DropIcon";
import { EyeDropperIcon } from "../EventIcons/EyeDropperIcon";

const useStyles = makeStyles(theme => ({
  graphEvents: {
    backgroundColor: theme.palette.events.background,
  },
  chart: {
  }
}))

const GraphEvent = (props) => {
  const { cx, payload, } = props;

  const getIcon = eventId => {
    switch (eventId) {
      case 1:
        return <BedIcon y={23} x={17.5} />
      case 2:
        return <DropIcon y={23} x={17.5} />
      case 3:
        return <EyeDropperIcon y={23} x={17.5} />
      default:
        break
    }
  }

    return (
      <svg xmlns="http://www.w3.org/2000/svg" x={cx} y={-7} width="60" height="66">
          <path fill="#B6E7A9" fillRule="evenodd" d="M49.535 35.783c0 10.936-8.865 19.802-19.801 19.802-10.936 0-19.801-8.866-19.801-19.802 0-8.836 5.79-16.314 13.781-18.863L29.734 9l6.019 7.92c7.992 2.549 13.782 10.027 13.782 18.863z"/>
          {getIcon(payload.eventId)}
      </svg>

  
      )

}

export const GraphEvents = inject('GraphStore', 'MonitorStore')(observer((props) =>  {

  const [ height, setHeight ] = useState(0)

  const { GraphStore, MonitorStore } = props

  const theme = useTheme()

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.eventsRef ? GraphStore.sideBarRefs.eventsRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  const classes = useStyles({ height })

  return (
    <ResponsiveContainer className={classes.graphEvents} width="100%" height={height}>
    <ScatterChart
      
      height={height}
      // width={782}
      margin={{
        top: 0, right: 0, bottom: 0, left: 0,
      }}
    >
      <rect x="0" y="0" width="60" height={height } fill={theme.palette.headers}/>
      <CartesianGrid horizontal={false} />
      <YAxis
        dataKey={'index'} 
        domain={[1]}
        ticks={[]} 
        width={cssConstants.graphView.yAxisWidth}
        tick={false}
        // tick={<YAxisTick dataKey={'events'} />}
        tickLine={false}
      />
      <XAxis
        allowDataOverflow= {true}
        dataKey = 'time'
        domain = {['dataMin', MonitorStore.timeStepArray[MonitorStore.timeStepArray.length - 1]]}
        name = 'Time'
        type = 'number'
        interval={3}
        ticks={MonitorStore.timeStepArray}
        tickFormatter = {(unixTime) => moment.unix(unixTime).format('HH:mm Do')}
        hide={true}
        padding={{right: cssConstants.graphView.marginRight }}
      />
      <defs>
        <filter id="shadow" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3"/>
        </filter>
      </defs>
      <Scatter isAnimationActive={false} data={MonitorStore.filteredEventsData} shape={<GraphEvent />} />
    </ScatterChart>
    </ResponsiveContainer>
  )
}))
