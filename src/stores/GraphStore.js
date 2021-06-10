import { observable, action, makeObservable, computed } from  'mobx'

export class GraphStore {
  constructor() {

    this.sideBarRefs = {
      headRef: null,
      eventsRef: null,
      uoWideRef: null,
      uoRef: null,
      iapWideRef: null,
      iapRef: null,
      tempRef: null,
      sideBar: 0
    }

    makeObservable(this, {
      sideBarRefs: observable,
      setSideBarRefs: action,
      graphViewWidth: computed,
    })
  }

  setSideBarRefs = refs => {
    this.sideBarRefs = refs
  }

  get graphViewWidth() {
    return this.sideBarRefs.sideBar ? window.innerWidth - this.sideBarRefs.sideBar.getBoundingClientRect().width : 0
  }

}