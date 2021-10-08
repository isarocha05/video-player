const video = document.querySelector('#video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const forward = document.querySelector('#forward')
const backward = document.querySelector('#backward')
const timeIndicator = document.querySelector("#indicator")

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)
forward.addEventListener('click', handleForward)
backward.addEventListener('click', handleReward)
video.addEventListener('loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeUpdate)
timeIndicator.addEventListener('input', handleInput)


function handlePlay() {
    console.log('click play')
    play.hidden = true;
    pause.hidden = false;
    video.play()
}

function handlePause() {
    video.pause()
    play.hidden = false;
    pause.hidden = true;
    console.log('click pause')
}

function handleForward() {
    video.currentTime += 10;
    console.log('click forward', video.currentTime)
}

function handleReward() {
    video.currentTime -= 10;
    console.log('click reward', video.currentTime)
}

function handleLoaded() {
    timeIndicator.max = video.duration
    console.log('cargo el video ->' + video.duration)
}

function handleTimeUpdate() {
    timeIndicator.value = video.currentTime
    console.log('tiempo actual ->', video.currentTime)
}

function handleInput() {
    video.currentTime = timeIndicator.value
    console.log("indicator -> ", timeIndicator.value)
}