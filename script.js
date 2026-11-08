const myTimer = document.querySelector('.main-container-right-timer-hour');
myTimer.style.fontSize = '40px';
let size = 40;

let myTimerInJs;

if (sessionStorage.getItem('timerValue') !== null) {
    myTimerInJs = parseInt(sessionStorage.getItem('timerValue'));
} else {
    myTimerInJs = 59;
}

const myInterval = setInterval(() => {
    if (myTimerInJs > 0) {
        myTimer.textContent = myTimerInJs;
        myTimerInJs--;
        sessionStorage.setItem('timerValue', myTimerInJs);
    } else if (myTimerInJs === 0) {
        alert("Дерун & Co відкрився!");
        clearInterval(myInterval);
        sessionStorage.removeItem('timerValue');
    }
    
    console.log(myTimerInJs);
}, 1000);
