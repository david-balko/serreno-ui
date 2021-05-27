import { observable, action, makeObservable } from  'mobx'

export class MonitorStore {
  constructor() {

    this.bedNumber = 'AS12343'
    this.patientWeight = 63


    makeObservable(this, {
      bedNumber: observable,
      setBedNumber: action,
      patientWeight: observable,
      setPatientWeight: action
    })
  }

  setBedNumber = (number) => {
    if (typeof number === 'string') {
      this.bedNumber = number
    }
  }

  setPatientWeight = (weight) => {
    if (!isNaN(weight) && weight >= 0) {
      this.patientWeight = weight
    }
  }

}