let utagEvents = [];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url.includes('tealium')) {
            utagEvents.push(details.url);
        }
    },
    {urls: ["<all_urls>"]}
);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message === "getUtagEvents") {
        sendResponse(utagEvents);
    }
});
