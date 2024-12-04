let websocketInstance = null;

export function initializeWebSocket(url) {
    if (!websocketInstance) {
        websocketInstance = new WebSocket(url);

        websocketInstance.onopen = () => {
            console.log("WebSocket connected");
            websocketInstance.send(JSON.stringify({ action: "getSettings" }));
        };

        websocketInstance.onerror = (error) => console.error("WebSocket error:", error);
    }
    return websocketInstance;
}

export function getWebSocket() {
    if (!websocketInstance) {
        throw new Error("WebSocket is not initialized. Call initializeWebSocket first.");
    }
    return websocketInstance;
}
