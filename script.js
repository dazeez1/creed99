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