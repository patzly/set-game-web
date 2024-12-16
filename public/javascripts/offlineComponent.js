export default {
    data() {
        return {
            isOnline: navigator.onLine,  // Initialer Status der Verbindung
            websocket: null,  // WebSocket-Referenz
        };
    },
    created() {
        // Überwache die Netzwerkverbindung
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);

        if (this.isOnline) {
            this.connectWebSocket();
        }
    },
    destroyed() {
        // Entfernen der Event Listener
        window.removeEventListener('online', this.handleOnline);
        window.removeEventListener('offline', this.handleOffline);
    },
    methods: {
        handleOnline() {
            this.isOnline = true;
            this.connectWebSocket();
        },
        handleOffline() {
            this.isOnline = false;
        },
        reconnect() {
            if (navigator.onLine) {
                this.connectWebSocket();
            } else {
                alert('Du bist immer noch offline!');
            }
        },
        connectWebSocket() {
            // WebSocket neu verbinden
            console.log('Versuche WebSocket-Verbindung...');
            this.websocket = new WebSocket('ws://localhost:9000/socket');

            this.websocket.onopen = () => {
                console.log('WebSocket verbunden!');
                this.isOnline = true;
            };

            this.websocket.onerror = (error) => {
                console.error('WebSocket-Fehler:', error);
                this.isOnline = false;
            };

            this.websocket.onclose = () => {
                console.log('WebSocket getrennt');
                this.isOnline = false;
            };
        },
    },
    template: `
    <div class="offline-container">
      <div class="offline-message">
        <p>Du bist offline! Versuche, die Verbindung wiederherzustellen.</p>
      </div>
      <div class="offline-animation"></div>
    </div>
  `,
};
