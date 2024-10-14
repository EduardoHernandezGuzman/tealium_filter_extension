let utagEvents = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "utagEvent") {
        utagEvents.push({utagEvents: message.data});
        console.log("utagEvent capturado:", message.data);
    } else if (message.type === "getUtagEvents") {
        sendResponse({ utagEvents: utagEvents });
    }
});
