// Start button script
const startButton = document.querySelector(".start-btn");

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/drink-search";
});


// capture form input from drink-details for ratings system.