class CountdownTimer {
  interval = null;

  constructor({ selector, targetDate }) {
    this.timerRef = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  getComponentTime() {
    const time = this.getRestOfTime();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  getRestOfTime() {
    const time = Date.now();
    const timeToTarget = this.targetDate.getTime();

    if (timeToTarget - time <= 0) {
      clearInterval(this.interval);
      return 0;
    }

    return timeToTarget - time;
  }

  getFormatTime({ days, hours, mins, secs }) {
    if (String(days).length < 2) {
      days = String(days).padStart(2, '0');
    }

    console.log(hours);
    hours = String(hours).padStart(2, '0');

    mins = String(mins).padStart(2, '0');

    secs = String(secs).padStart(2, '0');

    return { days, hours, mins, secs };
  }

  outputTimer() {
    const outputDate = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    const date = this.getComponentTime();
    console.log('date :>> ', date);
    const formatDate = this.getFormatTime(date);
    console.log('formatDate :>> ', formatDate);

    outputDate.days.innerHTML = formatDate.days;
    outputDate.hours.innerHTML = formatDate.hours;
    outputDate.mins.innerHTML = formatDate.mins;
    outputDate.secs.innerHTML = formatDate.secs;
  }

  initTimer() {
    this.interval = setInterval(this.outputTimer.bind(this), 1000);
  }
}

export { CountdownTimer };