'use strict'
const tv = {
  vol: 0,
  chan: 0,
  initPwrState: false,
  type: ['lcd', 'plasma', 'led'],
  reso: 1080,
  pwrConsump: 20,

  chngVol: function (numOfVol) {
    this.vol = this.vol + numOfVol
  },

  chngChan: function (numOfChan) {
    this.chan = this.chan + numOfChan
  },

  pwrState: function () {
    this.initPwrState = !this.initPwrState
    console.log(tv.initPwrState)
  }
}

module.exports = {
  sync: (value) => value,
  async: (value, cb) => setTimeout(() => cb(null, value), 0),
  promise: (value) => Promise.resolve(value)
}
