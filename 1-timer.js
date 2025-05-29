import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as x,i as l}from"./assets/vendor-BbbuE1sJ.js";const u=document.createElement("style");u.textContent=`
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
`;document.head.appendChild(u);const d=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),g=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),w=document.querySelector("[data-minutes]"),k=document.querySelector("[data-seconds]");let p=null,s=null;o.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(l.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),o.disabled=!0):(p=e,o.disabled=!1)}};x(d,S);o.addEventListener("click",()=>{o.disabled=!0,d.disabled=!0,s=setInterval(()=>{const t=p-new Date;if(t<=0){clearInterval(s),c(0,0,0,0),d.disabled=!1,l.success({title:"Done",message:"Countdown finished!",position:"topRight"});return}const{days:e,hours:n,minutes:r,seconds:i}=v(t);c(e,n,r,i)},1e3)});function v(t){const b=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:b,hours:h,minutes:m,seconds:f}}function a(t){return String(t).padStart(2,"0")}function c(t,e,n,r){g.textContent=a(t),y.textContent=a(e),w.textContent=a(n),k.textContent=a(r)}
//# sourceMappingURL=1-timer.js.map
