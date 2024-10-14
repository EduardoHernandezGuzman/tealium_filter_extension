const scriptContent = `
    // Guarda la función original
    const originalUtagView = utag.view;

    // Sobrescribe la función
    utag.view = function(data) {
        // Llama a la función original
        originalUtagView.apply(this, arguments);

        // Envía los datos del evento a la extensión
        window.postMessage({ type: "FROM_PAGE", text: JSON.stringify(data) }, "*");
    };
`;

// Inyecta el script en la página
const scriptEl = document.createElement('script');
scriptEl.textContent = scriptContent;
(document.head||document.documentElement).appendChild(scriptEl);
scriptEl.remove();

// Escucha los mensajes del script inyectado
window.addEventListener("message", function(event) {
    // Solo aceptamos mensajes de nosotros mismos
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        chrome.runtime.sendMessage({type: "utagEvent", data: event.data.text});
    }
}, false);
