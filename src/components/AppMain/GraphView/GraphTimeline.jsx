import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { ComposedChart, XAxis } from "recharts";
import moment from "moment";
import { cssConstants } from "../../../consts/theme";
import { useTheme } from "@material-ui/core";

const TimelineTick = (props) => {

  const { x, y, payload } = props

  return (
    <g transform={`translate(${x},${y})`}>
      <text fontSize={30}  x={0} y={0} dy={16} textAnchor="end" fill="white" >
        {moment.unix(payload.value).format('kk')}
      </text>
      <text fontSize={16}  x={17} y={-9} dy={16} textAnchor="end" fill="white" >
        {moment.unix(payload.value).format('mm')}
      </text>
    </g>
  );
}

export const GraphTimeline = inject('GraphStore', 'MonitorStore')(observer((props) =>  {

  const { GraphStore, MonitorStore } = props
  
  const [ height, setHeight ] = useState(0)

  const theme = useTheme()

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.headRef ? GraphStore.sideBarRefs.headRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  return (
        <ComposedChart
        style={{backgroundColor: theme.palette.headers}}
        height={height}
        width={GraphStore.graphViewWidth}
          margin={{
            top: 3, right: 0, bottom: 3, left: cssConstants.graphView.yAxisWidth,
          }}
          syncId="allGraphs"
          data={MonitorStore.filteredData}
        >
          <XAxis
          dataKey = 'time'
          domain = {['dataMin', 'dataMax']}
          name = 'Time'
          type = 'number'
          interval={3}
          ticks={MonitorStore.timeStepArray}
          axisLine={false}
          tickLine={false}
          padding={{right: cssConstants.graphView.marginRight }}
          tick={<TimelineTick />}
           />
        </ComposedChart>
  )
}))
