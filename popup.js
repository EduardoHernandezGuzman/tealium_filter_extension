chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "utagEvent") {
        const eventsList = document.getElementById('eventsList');
        const li = document.createElement('li');
        li.textContent = JSON.stringify(message.data);
        eventsList.appendChild(li);
    }
});
