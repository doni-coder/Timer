const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const reset = document.querySelector("#reset");
const stop = document.querySelector("#stop");
const start = document.querySelector("#start");

let stopInterval;
let count = 0;
let min = 0;
let hr = 0;

start.addEventListener("click", () => {
  stopInterval = setInterval(() => {
    if (count === 60) {
      count = 0;
      min = min + 1;
      minute.textContent = `${min} min`;
    } else if (min === 60) {
      min = 0;
      hr = hr + 1;
      hour.textContent = `${hr} hr`;
    } else {
      count++;
      second.textContent = `${count} sec`;
    }
  }, 1000);
});

stop.addEventListener("click",()=>{
    clearInterval(stopInterval);
})

reset.addEventListener("click",()=>{
    minute.textContent = `00 min`;
    hour.textContent = `00 hr`;
    second.textContent = `00 sec`;
    count = 0;
    min = 0;
    hr = 0;
})