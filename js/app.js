import { CountdownTimer } from "./countdown-timer.js";

const targetDate = new Date(2021, 7, 9);

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: targetDate,
});

timer.initTimer();
