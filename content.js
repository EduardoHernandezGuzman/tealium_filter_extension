const scriptContent = `
    const originalUtagView = utag.view;

    utag.view = function(data) {
        // Llama a la función original
        originalUtagView.apply(this, arguments);

        window.postMessage({ type: "FROM_PAGE", text: JSON.stringify(data) }, "*");
    };
`;

const scriptEl = document.createElement('script');
scriptEl.textContent = scriptContent;
(document.head||document.documentElement).appendChild(scriptEl);
scriptEl.remove();

window.addEventListener("message", function(event) 
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        chrome.runtime.sendMessage({type: "utagEvent", data: event.data.text});
    }
}, false);
