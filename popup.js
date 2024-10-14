document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ type: "getUtagEvents" }, (response) => {
        console.log('Response:', response);
        const eventsList = document.getElementById('eventsList');
        if (response && response.utagEvents) {
            console.log('Utag events:', response.utagEvents);
            response.utagEvents.forEach(event => {
                const li = document.createElement('li');
                li.textContent = event.utagEvents;
                eventsList.appendChild(li);
            });
        }
    });
});
