class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (printTimeCallback) {
        printTimeCallback ();
      }
    }, 1000);
  }


  getMinutes() {
    let minutes = this.currentTime / 60;
    let minutesRounded = Math.floor(minutes);
    return minutesRounded;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    let secondsRounded = Math.floor(seconds);
    return secondsRounded;
  }

  computeTwoDigitNumber(value) {
    let arrNumb = [0,value]
    if(value < 10){
      arrNumb.push(value)
      return `${arrNumb[0]}${arrNumb[1]}`;
    }else {
      return `${value}`
    }
    
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();

    let twoDigitMinutes = this.computeTwoDigitNumber(minutes);
    let twoDigitSeconds = this.computeTwoDigitNumber(seconds);

    return `${twoDigitMinutes}:${twoDigitSeconds}`
  }
}
    
  

      
      
    
    
    

  
  
