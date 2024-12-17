<template>
  <div class="offline-container">
    <div class="offline-message">
      <p>Du bist offline! Versuche, die Verbindung wiederherzustellen.</p>
    </div>
    <div class="offline-animation"></div>
    <button @click="goBackToHome" class="back-to-home-btn">Zurück zum Home</button>
  </div>
</template>

<script>
export default {
  props: {
    disableOfflineMode: Function // Methode, um offlineMode zu deaktivieren
  },
  data() {
    return {
      isOnline: navigator.onLine,
    };
  },
  created() {
    //window.addEventListener('online', this.handleOnline);
    //window.addEventListener('offline', this.handleOffline);
  },
  unmounted() {
    //window.removeEventListener('online', this.handleOnline);
    //window.removeEventListener('offline', this.handleOffline);
  },
  methods: {
    handleOnline() {
      this.isOnline = true;
    },
    handleOffline() {
      this.isOnline = false;
    },
    goBackToHome() {
      // Den Offline-Modus deaktivieren, indem die Methode aufgerufen wird
      this.disableOfflineMode();
    }
  }
};
</script>

<style scoped>
/* Button-Stil für "Zurück zum Home" */
.back-to-home-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
