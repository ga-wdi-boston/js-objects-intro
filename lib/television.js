'use strict';

// Define class
const television = {

  // Variables
  powerOn: false,
  volume: 10,
  maxVol: 100,
  minVol: 0,
  maxChan: 500,
  minChan: 0,
  channel: 100,
  mute: true,

  // Methods
  togglePower: function(){
    this.powerOn = !this.powerOn;
    console.log('Power is on: ' + this.powerOn);
    return this.powerOn;
  },

  toggleMute: function(){
    this.mute = !this.mute;
    console.log('Power is on: ' + this.mute);
    return this.mute;
  },

  volumeChange: function(newVol){

     // Check volume input
     let validVol;
     if(newVol >= this.minVol && newVol <= this.maxVol){
       validVol = true;
     }else{
       validVol = false;
     }

     // Make change
     if(validVol){
       this.volume = newVol;
       console.log('Volume is now: ' + this.volume);
       return this.volume;
     }else{
       console.log('Please enter a valid volume');
       console.log('Volume is still: ' + this.volume);
       return this.volume;
     }
   },

 channelChange: function(newChan){

    // Check volume input
    let validChan;
    if(newChan >= this.minChan && newChan <= this.maxChan){
      validChan = true;
    }else{
      validChan = false;
    }

    // Make change
    if(validChan){
      this.channel = newChan;
      console.log('Channnel is now: ' + this.channel);
      return this.channel;
    }else{
      console.log('Please enter a valid channel');
      console.log('Volume is still: ' + this.channel);
      return this.channel;
    }
   }
 };


console.log(television);
