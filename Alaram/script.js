let alarmTime = null;
let isAlarmSet = false;
const audio = document.getElementById("sing");

// Live clock display
function updateClock() {
  const now = new Date();
  document.getElementById("clock-display").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Set Alarm
function set_time() {
  const input = document.getElementById("input_time").value;
  if (!input) {
    document.getElementById("show").innerText = "⚠️ Please select a time!";
    return;
  }
  alarmTime = input;
  isAlarmSet = true;
  document.getElementById("show").innerText = `✅ Alarm set for ${alarmTime}`;
}

// Stop Alarm
function stop_alarm() {
  audio.pause();
  audio.currentTime = 0;
  isAlarmSet = false;
  document.getElementById("show").innerText = "⏹️ Alarm stopped.";
}

// Snooze Alarm
function snooze_alarm() {
  stop_alarm();
  const now = new Date();
  now.setMinutes(now.getMinutes() + 5);
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  alarmTime = `${h}:${m}`;
  isAlarmSet = true;
  document.getElementById("show").innerText = `😴 Snoozed. Next alarm: ${alarmTime}`;
}

// Alarm trigger check
setInterval(() => {
  if (isAlarmSet) {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);
    if (currentTime === alarmTime) {
      audio.play();
      document.getElementById("show").innerText = "🔔 Alarm ringing!";
      isAlarmSet = false;
    }
  }
}, 1000);
