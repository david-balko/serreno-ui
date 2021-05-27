import { observable, action, makeObservable } from  'mobx'

export class AppStore {
  constructor() {

    this.appInitStage = 'bed'
    this.monitorView = 'graph'
    this.monitorTimeStep = 6
    this.monitorFocus = 'UO'

    makeObservable(this, {
      appInitStage: observable,
      setAppInitStage: action,
      monitorView: observable,
      setMonitorView: action,
      monitorTimeStep: observable,
      setMonitorTimeStep: action,
      monitorFocus: observable,
      setMonitorFocus: action
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

  setMonitorTimeStep = hours => {
    if (!isNaN(hours) && hours >= 3 && hours <= 72) {
      this.monitorTimeStep = hours
    }
  }

  setMonitorFocus = focus => {
    if (focus.match(/^(UO|IAP)$/)) {
      this.monitorFocus = focus
    }
  }

}