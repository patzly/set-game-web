<template>
  <div class="offline-container">
    <div class="offline-message">
      <p>Du bist offline! Versuche, die Verbindung wiederherzustellen.</p>
    </div>
    <div class="offline-animation"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnline: navigator.onLine,
    };
  },
  created() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  },
  unmounted() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  },
  methods: {
    handleOnline() {
      this.isOnline = true;
    },
    handleOffline() {
      this.isOnline = false;
    },
  }
};
</script>

<style scoped>
/* Add any styles needed for the offline component */
</style>
