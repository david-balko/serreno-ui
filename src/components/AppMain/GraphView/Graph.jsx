import { useTheme } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { cssConstants } from "../../../consts/theme";

const YAxisTick = (props) => {

  const { x, y, payload, dataKey } = props

  let warningValues = []
  switch (dataKey) {
    case "uo":
      warningValues = [20, 40]
      break
    case "iap":
      warningValues = [5, 11]
      break
    case "temp":
      warningValues = [35, 40]
      break
    default:
      warningValues = [0, 100]

  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        fontSize={30}
        fontWeight={payload.value <= warningValues[0] || payload.value >= warningValues[1] ? "bold" : "normal"} 
        x={0} 
        y={0} 
        textAnchor="end" 
        fill={payload.value <= warningValues[0] || payload.value >= warningValues[1] ? "red" : "white"} 
      >
        {payload.value}
      </text>
    </g>
  );
}

const CustomizedDot = (props) => {
  const { cx, cy, payload, color, dataKey, highWarning, lowWarning } = props;

  if (payload.special && Math.random() > 0.9) {
    return (
      <circle overflow="visible" cx={cx} cy={cy} r={11} fill="white" filter={`url(#${dataKey}Glow)`} />  
      )
  }

  if (payload[dataKey] >= highWarning || payload[dataKey] <= lowWarning) {
    return (
      <circle cx={cx} cy={cy} r={5} fill={'red'} />  
    )
  }
    
  return (
    <circle cx={cx} cy={cy} r={5} fill={color} />  
  )
}

export const Graph = inject('MonitorStore')(observer((props) =>  {

  const { height,  MonitorStore, dataKey, highWarning, lowWarning, yAxisTicks, yAxisDomain } = props

  const theme = useTheme()

  const sortData = data => {
    const sorted = data.map(d => ({
      ...d,
      high: d[dataKey] > highWarning ? [highWarning, d[dataKey]] : [highWarning, highWarning],
      middle: [lowWarning, highWarning],
      low:  d[dataKey] < lowWarning ? [d[dataKey], lowWarning] : [lowWarning, lowWarning],
    }))
    sorted.push({
      middle: [lowWarning, highWarning],
      time: moment().add(2, "hours").unix(),

    })
    return sorted
  }

  const sortedData = sortData(MonitorStore.filteredData)

  return (
    <ResponsiveContainer width="100%" height={height}>
    <ComposedChart
      
      height={height}
      data={sortedData}
      margin={{
        top: 0, right: 0, bottom: 0, left: 0,
      }}
    >
      <defs>

            <filter id={`${dataKey}Glow`} height="300%" width="300%" x="-75%" y="-75%">

              <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />


              <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />


              <feFlood floodColor={theme.palette[dataKey].main} result="glowColor" />


              <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />


              <feMerge>
                <feMergeNode in="softGlow_colored"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>

            </filter>

        </defs>
      <rect x="0" y="0" width="60" height={height} fill={theme.palette.headers}/>
      <CartesianGrid horizontal={false} />
      <YAxis
        dataKey={dataKey} 
        domain={yAxisDomain}
        ticks={yAxisTicks} 
        width={cssConstants.graphView.yAxisWidth} 
        tick={<YAxisTick dataKey={dataKey} />}
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
      <Area isAnimationActive={false} type="monotone" dataKey="high" stroke="none" opacity={0.5} fill="#fd3636" />
      <Area isAnimationActive={false} type="monotone" dataKey="middle" opacity={0.5} stroke="none" fill={theme.palette[dataKey].line} />
      <Area isAnimationActive={false} type="monotone" dataKey="low" stroke="none" opacity={0.5} fill="#fd3636" />
      <Line isAnimationActive={false} strokeWidth={2} dot={<CustomizedDot highWarning={highWarning} lowWarning={lowWarning} dataKey={dataKey} color={theme.palette[dataKey].line} />} type="monotone" dataKey={dataKey} stroke={theme.palette[dataKey].line} />
      {/* <Scatter data={sortSpecialDots(sortedData)} shape={<CustomizedDot data={sortedData} color={theme.palette[dataKey].main} />} /> */}
    </ComposedChart>
    </ResponsiveContainer>
  )
}))
