document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ type: "getUtagEvents" }, (response) => {
        const eventsList = document.getElementById('eventsList');
        if (response && response.utagEvents) {
            response.utagEvents.forEach(event => {
                const li = document.createElement('li');
                li.textContent = JSON.stringify(event);
                eventsList.appendChild(li);
            });
        }
    });
});
