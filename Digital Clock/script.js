function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("display").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
