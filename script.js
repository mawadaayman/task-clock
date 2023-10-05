
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Add leading zeros to minutes and seconds
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("clock").innerText = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);



  var stopwatchInterval;
var startTime;
var elapsedTime = 0;

function updateStopwatch() {
  var currentTime = new Date().getTime();
  var deltaTime = currentTime - startTime;
  elapsedTime += deltaTime;
  startTime = currentTime;
  
  var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
  // Add leading zeros to hours, minutes, and seconds
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  var timeString = hours + ":" + minutes + ":" + seconds;
  
  document.getElementById("stopwatch").innerText = timeString;
}

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime();
    stopwatchInterval = setInterval(updateStopwatch, 100);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
}