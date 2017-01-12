'use strict';

const television = {
  make: 'Sony',
  model: '1992 monitor',
  mfgYear: '1992',
  power: 'Off',
  volume: 0,
  togglePower: function () {
  // perhaps add a guard clause to prevent bad input.
  if (this.power === 'Off') {
    this.power = 'On';
  } else {
    this.power = 'Off';
  }
  return this.power;
  },
  increaseVolume: function () {
    return ++this.volume;
  },
  decreaseVolume: function () {
    return --this.volume;
  },
  increaseChannel: function () {
    return ++this.channel;
  },
  decreaseChannel: function () {
    return --this.channel;
  },
  changeChannel: function (channelNumber) {
    this.channel = channelNumber;
    return this.channel;
  },
  changeInput: function () {}
};



module.exports = television;
