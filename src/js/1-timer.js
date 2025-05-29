import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Встроенные стили
const style = document.createElement('style');
style.textContent = `
  .choose {
    display: flex;
    gap: 8px;
  }

  input {
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    width: 272px;
    height: 40px;
  }

  input:hover {
    border-color: #007bff;
  }

  input:focus {
    border-color: #0056b3;
    outline: none;
  }

  input:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 75px;
    height: 40px;
  }

  button[data-start] {
    background-color: #007bff;
    color: white;
  }

  button[data-start]:hover {
    background-color: #0056b3;
  }

  button[data-start]:disabled {
    background-color: #adb5bd;
    cursor: not-allowed;
  }

  .timer {
    display: flex;
    gap: 24px;
    margin-top: 32px;
  }

  .field {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 55px;
    height: 72px;
  }

  .value {
    font-size: 24px;
    font-weight: bold;
  }

  .label {
    font-size: 14px;
    color: gray;
  }

  .flatpickr-calendar {
    border-radius: 8px !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
  }

  .flatpickr-day.selected {
    background-color: #007bff !important;
    color: white !important;
    border-radius: 50% !important;
  }

  .flatpickr-day:hover {
    background-color: #0056b3 !important;
    color: white !important;
    border-radius: 50% !important;
  }
`;
document.head.appendChild(style);

// Элементы
const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let countdownInterval = null;

startButton.disabled = true;

// Настройка flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

// Обработка запуска таймера
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  dateTimePicker.disabled = true;

  countdownInterval = setInterval(() => {
    const timeRemaining = userSelectedDate - new Date();

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay(0, 0, 0, 0);
      dateTimePicker.disabled = false;
      iziToast.success({
        title: 'Done',
        message: 'Countdown finished!',
        position: 'topRight',
      });
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateTimerDisplay(days, hours, minutes, seconds);
  }, 1000);
});

// Функции
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}