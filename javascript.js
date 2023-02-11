
let start_time
let interval

let seconds = 0
let secondsLast = 0

document.onkeydown = function(e) {
    if(e.key === 'Escape') {
        let buttonReset = document.getElementById('button_reset')
        buttonReset.click();
    }
    if(e.key == ' '){
        let buttonStart = document.getElementById('button_start')
        buttonStart.click();
    }
    
}


function startClick(){
    start_time = new Date() - new Date(secondsLast)


    interval = setInterval( () => {
        updateTimer();
    }, 1)
    
  
    let buttonStart = document.getElementById('button_start')
    buttonStart.textContent = 'Stop'
    buttonStart.onclick = stopTimer
}

function resetClick(){
    
    let divTimer = document.getElementById('lastTimer');
    divTimer.textContent = `Last time : ${format_seconds(secondsLast)}` 

    let divTimer2 = document.getElementById('timer');
    divTimer2.textContent = format_seconds(0)


    secondsLast = 0
    seconds = 0;
}

function stopTimer(){
    clearInterval(interval);
    secondsLast = seconds
    interval = null;
    let buttonStart = document.getElementById('button_start')
    buttonStart.textContent = 'Start'
    buttonStart.onclick = startClick
}


function updateTimer(){
    seconds = diffDate(start_time);
    let formatSeconds = format_seconds(seconds)
    let divTimer = document.getElementById('timer');
    divTimer.textContent = formatSeconds
}


function diffDate(start_time){
    return new Date() - start_time;
}


function format_seconds(seconds) {
	if(isNaN(seconds))
		seconds = 0;

	var diff = new Date(seconds);
	var minutes = diff.getMinutes();
	var seconds = diff.getSeconds();
	var milliseconds = diff.getMilliseconds();

	if (minutes < 10)
		minutes = "0" + minutes;
	if (seconds < 10)
		seconds = "0" + seconds;

	if (milliseconds < 10)
		milliseconds = "00" + milliseconds;
	else if (milliseconds < 100)
		milliseconds = "0" + milliseconds;

	return minutes + ":" + seconds + ":" + milliseconds;
}