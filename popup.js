document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ type: "getUtagEvents" }, (response) => {
        const eventsList = document.getElementById('eventsList');
        if (response) {
            response.forEach(event => {
                const li = document.createElement('li');
                li.textContent = event;
                eventsList.appendChild(li);
            });
        }
    });
});
