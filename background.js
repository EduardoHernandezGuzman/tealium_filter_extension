chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "utagEvent") {
        utagEvents.push(message.data);
        console.log("utagEvent capturado:", message.data);
    } else if (message.type === "getUtagEvents") {
        sendResponse({ utagEvents: utagEvents });
    }
});
