import { observable, action, makeObservable } from  'mobx'

export class AppStore {
  constructor() {

    this.appInitStage = 'bed'
    this.monitorView = 'graph'
    this.monitorFocus = 'UO'
    this.eventsRef = null

    makeObservable(this, {
      appInitStage: observable,
      setAppInitStage: action,
      monitorView: observable,
      setMonitorView: action,
      monitorFocus: observable,
      setMonitorFocus: action,
      eventsRef: observable,
      setEventsRef: action,
    })
  }

  setAppInitStage = stage => {
    if (stage.match(/^(bed|weight|params|connections)$/)) {
      this.appInitStage = stage
    }
  }

  setMonitorView = view => {
    if (view.match(/^(grid|graph)$/)) {
      this.monitorView = view
    }
  }

  setMonitorFocus = focus => {
    if (focus.match(/^(UO|IAP)$/)) {
      this.monitorFocus = focus
    }
  }

  setEventsRef = ref => {
    this.eventsRef = ref
  }

}