function updateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // Set to false for 24-hour format
    };
    document.getElementById('live-time').innerHTML = now.toLocaleString('en-US', options);
}

// Update time immediately on page load
updateTime();
// Set interval to update every second
setInterval(updateTime, 1000);


const API_URL = 'http://127.0.0.1:8000/api/save-email/';

document.getElementById('email-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('email-input').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert("Error: " + JSON.stringify(result));
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
        console.error(error);
    }
});
