var stop = document.getElementById('stopwatch')
var start, stopWatch, minutes = 00, colors, hours = 00, startWatch, sec = 'seconds', min = 'minutes', hr = 'hours', resetWatch, seconds = 00, text = document.getElementById('stopText');
stop.style.display = "none"
setTimeout(function() { loadPage() }, 3000)

function loadPage() {
  stop.style.display = "block"
  document.getElementById('warning').style.display = "none"
  function increaseTime() {
    seconds++
    if(seconds >= 60) {
      seconds = 0
      minutes++
    } else if(minutes >= 60) {
      minutes = 0
      hours++
    } else if(hours === 24) {
      document.getElementById('stopText').innerHTML = "oh, why have you left me on this long!! my battery's almost dead!!"
    }
    if(seconds === 1) {
      sec = 'second'
    } else if(minutes === 1) {
      min = 'minute'
    } else if(hours === 1) {
      hr = 'hour'
    } else {
      sec = 'seconds'
      min = 'minutes'
      hr = 'hours'
    }
    text.innerHTML = hours+" "+hr+', '+minutes+' '+min+', '+seconds+' '+sec+'.'
  }
  start = function() {
    startWatch = setInterval(function() { increaseTime() }, 1000)
    colors = setInterval(function() { document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16); }, 10)
  }
  stopWatch = function() {
    clearInterval(startWatch)
    clearInterval(colors)
  } 
  resetWatch = function() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(colors)
    clearInterval(startWatch)
    text.innerHTML = '0 hours, 0 minutes, 0 seconds.'
    document.body.style.background = '#ffffff'
  }
}
