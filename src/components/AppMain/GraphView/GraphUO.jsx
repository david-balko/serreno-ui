import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Graph } from "./Graph";

export const GraphUO = inject('GraphStore')(observer((props) =>  {

  const [ height, setHeight ] = useState(0)

  const { GraphStore } = props

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.uoRef ? GraphStore.sideBarRefs.uoRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  return (
      <Graph
        height={height}
        width={GraphStore.graphViewWidth} 
        dataKey="uo" 
        highWarning={40} 
        lowWarning={20} 
        yAxisTicks ={[20, 40]}
        yAxisDomain = {[5, 55]}
      
      />
  )
}))
