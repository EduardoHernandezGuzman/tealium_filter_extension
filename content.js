const originalConsoleLog = console.log;
console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    const isUtagView = args.some(arg => typeof arg === 'string' && arg.includes('utag.view'));
    const isUtagLink = args.some(arg => typeof arg === 'string' && arg.includes('utag.link'));
    if (isUtagView || isUtagLink) {
        chrome.runtime.sendMessage({type: "utagEvent", data: args});
    }
};
