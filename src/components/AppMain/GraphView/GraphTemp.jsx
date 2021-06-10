import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Graph } from "./Graph";


export const GraphTemp = inject('GraphStore')(observer((props) =>  {

  const [ height, setHeight ] = useState(0)

  const { GraphStore } = props

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.tempRef ? GraphStore.sideBarRefs.tempRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  return (
      <Graph
        height={height}
        width={GraphStore.graphViewWidth} 
        dataKey="temp" 
        highWarning={40} 
        lowWarning={35} 
        yAxisTicks ={[35, 40]}
        yAxisDomain = {[31, 45]}
      
      />
  )
}))
