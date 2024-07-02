
const uTc = () => {
    
    const current = new Date();
    const uTcString = current.toUTCString();
    
    
    const [weekday, day, month, year, time] = uTcString.split(' ');

  
    document.getElementById("currentDate").textContent = `${weekday} ${day} ${month} ${year}`;
    document.getElementById("currentTime").textContent = time;
};


uTc();


setInterval(uTc, 1000);


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = days[new Date().getDay()];


document.getElementById("currentDay").textContent = currentDay;
