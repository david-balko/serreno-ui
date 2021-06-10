import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Graph } from "./Graph";

export const GraphUOWide = inject('GraphStore', 'MonitorStore', 'AppStore')(observer((props) =>  {

  const [ height, setHeight ] = useState(0)

  const { GraphStore } = props

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.uoWideRef ? GraphStore.sideBarRefs.uoWideRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  return (
      <Graph
        height={height}
        width={GraphStore.graphViewWidth} 
        dataKey="uo" 
        highWarning={40} 
        lowWarning={20} 
        yAxisTicks ={[20, 25, 30, 35, 40]}
        yAxisDomain = {[13, 47]}
      
      />
  )
}))
