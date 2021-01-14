const launchTime = new Date('Jan 20, 2021 23:15:30');

let timeInDays = Math.abs(
  (launchTime.getTime() - Date.now()) / 1000 / 60 / 60 / 24
);
let timeInHours = Math.abs((Math.floor(timeInDays) - timeInDays) * 24);
let timeInMinutes = Math.abs((Math.floor(timeInHours) - timeInHours) * 60);
let timeInSeconds = Math.abs((Math.floor(timeInMinutes) - timeInMinutes) * 60);

timeInDays = Math.floor(timeInDays);
timeInHours = Math.floor(timeInHours);
timeInMinutes = Math.floor(timeInMinutes);
timeInSeconds = Math.floor(timeInSeconds);

const days = document.querySelector('.counter__card-duaration-days');
const hours = document.querySelector('.counter__card-duaration-hours');
const minutes = document.querySelector('.counter__card-duaration-minutes');
const seconds = document.querySelector('.counter__card-duaration-seconds');

const specifyTime = (T) => {

}

const updateTime = (d, h, m, s) => {
  if (d % 10 === d) {
    days.textContent = '0' + d.toString();
  } else {
    days.textContent = d.toString();
  }
  if (h % 10 === h) {
    hours.textContent = '0' + h.toString();
  } else {
    hours.textContent = h.toString();
  }
  if (m % 10 === m) {
    minutes.textContent = '0' + m.toString();
  } else {
    minutes.textContent = m.toString();
  }
  if (s % 10 === s) {
    seconds.textContent = '0' + s.toString();
  } else {
    seconds.textContent = s.toString();
  }
};

updateTime(timeInDays, timeInHours, timeInMinutes, timeInSeconds);

while (true) {
  setTimeout(() => {
    updateTime(timeInDays, timeInHours, timeInMinutes, timeInSeconds);
  }, 1000);
}
