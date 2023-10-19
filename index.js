let timer;
let isRunning = false;
let seconds = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        seconds++;
        display.textContent = formatTime(seconds);
    }, 1000);
    startButton.textContent = 'Pause';
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
    startButton.textContent = 'Resume';
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    display.textContent = '00:00:00';
    startButton.textContent = 'Start';
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return (
        String(hours).padStart(2, '0') +
        ':' +
        String(minutes).padStart(2, '0') +
        ':' +
        String(remainingSeconds).padStart(2, '0')
    );
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    } else {
        pauseTimer();
    }
});

stopButton.addEventListener('click', pauseTimer);

resetButton.addEventListener('click', resetTimer);
const toggleStyleButton = document.getElementById('toggle-style');
const stopwatch = document.querySelector('.stopwatch');

toggleStyleButton.addEventListener('click', () => {
    stopwatch.classList.toggle('analog');
});