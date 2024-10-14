const scriptContent = `
    const originalConsoleLog = console.log;
    console.log = function(...args) {
        originalConsoleLog.apply(console, args);
        const isUtagView = args.some(arg => typeof arg === 'string' && arg.includes('utag.view'));
        const isUtagLink = args.some(arg => typeof arg === 'string' && arg.includes('utag.link'));
        if (isUtagView || isUtagLink) {
            window.postMessage({ type: "FROM_PAGE", text: args }, "*");
        }
    };
`;

const scriptEl = document.createElement('script');
scriptEl.textContent = scriptContent;
(document.head||document.documentElement).appendChild(scriptEl);
scriptEl.remove();

window.addEventListener("message", function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        console.log("Content script received: " + JSON.stringify(event.data.text));
        chrome.runtime.sendMessage({type: "utagEvent", data: JSON.stringify(event.data.text)});
    }
}, false);
