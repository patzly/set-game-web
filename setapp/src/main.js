import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import './assets/styles.css'; // Globale CSS-Datei importieren

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
    });
}

createApp(App).mount('#app')
