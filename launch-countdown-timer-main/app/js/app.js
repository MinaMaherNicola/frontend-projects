const launchTime = new Date('Jan 20, 2021 23:15:30');

const days = document.querySelector('.counter__card-duaration-days');
const hours = document.querySelector('.counter__card-duaration-hours');
const minutes = document.querySelector('.counter__card-duaration-minutes');
const seconds = document.querySelector('.counter__card-duaration-seconds');

const specifyTime = (T) => {
  let timers = [];
  let timeInDays = Math.abs((T.getTime() - Date.now()) / 1000 / 60 / 60 / 24);
  let timeInHours = Math.abs((Math.floor(timeInDays) - timeInDays) * 24);
  let timeInMinutes = Math.abs((Math.floor(timeInHours) - timeInHours) * 60);
  let timeInSeconds = Math.abs(
    (Math.floor(timeInMinutes) - timeInMinutes) * 60
  );

  timeInDays = Math.floor(timeInDays);
  timeInHours = Math.floor(timeInHours);
  timeInMinutes = Math.floor(timeInMinutes);
  timeInSeconds = Math.floor(timeInSeconds);
  timers.push(timeInDays);
  timers.push(timeInHours);
  timers.push(timeInMinutes);
  timers.push(timeInSeconds);
  return timers;
};

const updateTime = (timers) => {
  if (timers[0] % 10 === timers[0]) {
    days.textContent = '0' + timers[0].toString();
  } else {
    days.textContent = timers[0].toString();
  }
  if (timers[1] % 10 === timers[1]) {
    hours.textContent = '0' + timers[1].toString();
  } else {
    hours.textContent = timers[1].toString();
  }
  if (timers[2] % 10 === timers[2]) {
    minutes.textContent = '0' + timers[2].toString();
  } else {
    minutes.textContent = timers[2].toString();
  }
  if (timers[3] % 10 === timers[3]) {
    seconds.textContent = '0' + timers[3].toString();
  } else {
    seconds.textContent = timers[3].toString();
  }
};

setTimeout(() => {
  updateTime(specifyTime(launchTime));
}, 1000);
