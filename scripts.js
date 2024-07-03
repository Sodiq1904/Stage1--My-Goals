document.addEventListener("DOMContentLoaded", function() {
  function updateTime() {
      const currentTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
      const now = new Date();
      currentTimeElement.textContent = now.toLocaleTimeString();
  }

  function updateDay() {
      const currentDayElement = document.querySelector("[data-testid='currentDay']");
      const now = new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      currentDayElement.textContent = days[now.getUTCDay()];
  }

  const slackEmailElement = document.querySelector("[data-testid='slackEmail']");
  slackEmailElement.textContent = "azeezsodiq1904@gmail.com";

  updateTime();
  updateDay();

  setInterval(updateTime, 1000);
});