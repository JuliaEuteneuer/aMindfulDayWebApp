//CURRENT TIME AND DATE

function setDate() {

    const date = document.getElementById('date');
    const today = new Date();
     
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdays[today.getDay()]; //number 0-6

    const day = today.getDate();// number 1-31

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[today.getMonth()]; // number 0-11

    const todaysDate = weekday + ", " + day +"th " + month;
    date.innerHTML = todaysDate;

}

setDate();

function setTime() {

    const time = document.getElementById('time');
    
    const now = new Date();

    const minutes = now.getMinutes();
    const hours = now.getHours();

    let clockTime;

    if (minutes > 9) {
        clockTime = hours + " : " + minutes;
    } else {
        clockTime = hours + " : 0"+minutes;
    }
    time.innerHTML = clockTime;

};
setTime();

// update the time every 30seconds (every minute might not be enough?)
const halfMinute = 30000;
setInterval(setTime, halfMinute);

