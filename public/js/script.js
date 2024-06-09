// Start button script
const startButton = document.querySelector(".start-btn");

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/drink-search";
});


// capture form input from drink-details for ratings system.
document.getElementById("rating-form").addEventListener('submit', async function(event) {
  event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const ratingData = {
        drink_id: formData.get('drink_id'),
        rate: formData.get('rate')
    };

    const response = await fetch('/submit-rating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ratingData),
    });

    if (response.ok) {
      alert('User Rating Accepted!');
    } else {
      alert('Failed to submit rating. Please try again.');
    }
});