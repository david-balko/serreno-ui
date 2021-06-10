import { observable, action, makeObservable, computed } from  'mobx'
import moment from 'moment'

export class MonitorStore {
  constructor() {

    this.bedNumber = 'AS12343'
    this.patientWeight = 63
    this.data = []
    this.monitorTimeStep = 6
    this.timeStepArray = null
    this.eventsData = []
    this.generateData(51)
    this.refreshTimeStepArray()

    makeObservable(this, {
      bedNumber: observable,
      setBedNumber: action,
      patientWeight: observable,
      setPatientWeight: action,
      monitorTimeStep: observable,
      setMonitorTimeStep: action,
      timeStepArray: observable,
      refreshTimeStepArray: action,
      data: observable,
      filteredData: computed,
      eventsData: observable,
      filteredEventsData: computed
    })
  }

  generateData = (values) => {
    const randomData = []
    const now = moment().startOf('hour')
    randomData.unshift({
      time: now.unix(),
      uo: Math.floor(Math.random() * (43 - 17) + 17),
      iap:  Math.floor(Math.random() * (13 - 4) + 4),
      temp: Math.floor(Math.random() * (42 - 34) + 34),
      special: Math.random() < 0.5
    })
    for (let i = 0; i < values; i++) {
      const newUo = randomData[0].uo + Math.floor(Math.random() * (3 - (-3) + 1)) + (-3)
      const newIap = randomData[0].iap + Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)
      const newTemp = randomData[0].temp + Math.floor(Math.random() * (2 - (-2) + 1)) + (-2)
      randomData.unshift({
        time: now.subtract(15, 'minutes').unix(),
        uo: newUo < 15 ? 15 : newUo > 45 ? 45 : newUo,
      iap:  newIap < 2 ? 2 : newIap > 15 ? 15 : newIap,
      temp: newTemp < 33 ? 33 : newTemp > 43 ? 43 : newTemp,
      special: Math.random() < 0.5
      })
    }
    const events = []
    for (let i = 0; i <= 6; i++) {
      events.push({
        time: Math.floor(Math.random() * (randomData[randomData.length - 1].time - randomData[0].time) + randomData[0].time),
        index: 1,
        eventId: Math.floor(Math.random() * (4 - 1) + 1)
      })
    }
    this.eventsData = events
    this.data = randomData

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

  setMonitorTimeStep = hours => {
    if (!isNaN(hours) && hours >= 3 && hours <= 12) {
      this.monitorTimeStep = hours
      this.refreshTimeStepArray()
    }
  }

  refreshTimeStepArray = () => {
    const timeStepArray = []
    const now = moment()
    timeStepArray.unshift(now.minute() ? now.add(1, 'hour').startOf('hour').unix() : now.startOf('hour').unix())
    for (let i = 0; i < (this.monitorTimeStep * 4); i++) {
      timeStepArray.unshift(now.subtract(15, 'minutes').unix())
    }
    this.timeStepArray = timeStepArray
  }

  get filteredData() {
    const filtered = this.data.filter(d => d.time >= this.timeStepArray[0] && d.time <= this.timeStepArray[this.timeStepArray.length - 1])
    return filtered
  }

  get filteredEventsData() {
    
    const filteredEvents = this.eventsData.filter(d => d.time >= this.timeStepArray[0] && d.time <= this.timeStepArray[this.timeStepArray.length - 1])
    return filteredEvents
  }

}