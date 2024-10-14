document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage("getUtagEvents", function(response) {
        const eventsList = document.getElementById('eventsList');
        response.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            eventsList.appendChild(li);
        });
    });
});
