import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Graph } from "./Graph";


export const GraphIAPWide = inject('GraphStore')(observer((props) =>  {

  const [ height, setHeight ] = useState(0)

  const { GraphStore } = props

  useEffect(() => {
    setHeight(GraphStore.sideBarRefs.iapWideRef ? GraphStore.sideBarRefs.iapWideRef.offsetHeight : 0)
  }, [GraphStore.sideBarRefs])

  return (
      <Graph
        height={height}
        width={GraphStore.graphViewWidth} 
        dataKey="iap" 
        highWarning={12} 
        lowWarning={5} 
        yAxisTicks ={[5, 7, 9, 11 ]}
        yAxisDomain = {[1, 19]}
      
      />
  )
}))
