import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Graph } from "./Graph";

export const GraphIAP = inject('GraphStore')(observer((props) =>  {

  const [ height, setHeight ] = useState(0)

  const { GraphStore } = props

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.iapRef ? GraphStore.sideBarRefs.iapRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  return (
      <Graph
        height={height}
        width={GraphStore.graphViewWidth} 
        dataKey="iap" 
        highWarning={12} 
        lowWarning={5} 
        yAxisTicks ={[5, 12]}
        yAxisDomain = {[1, 19]}
      
      />
  )
}))
