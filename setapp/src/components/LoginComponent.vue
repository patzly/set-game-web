<template>
  <div class="login-container">
    <h2 class="login-header">Login</h2>
    <form @submit.prevent="loginWithEmail" class="login-form">
      <div class="input-group">
        <label for="email">Email:</label>
        <input
            type="email"
            v-model="email"
            id="email"
            required
            class="custom-input"
        />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input
            type="password"
            v-model="password"
            id="password"
            required
            class="custom-input"
        />
      </div>
      <button type="submit" class="custom-button">Login</button>
    </form>
    <button @click="loginWithGoogle" class="custom-button google-button">
      Login with Google
    </button>
    <p>
      Noch keinen Account?
      <button
          @click="$emit('switch-to-register')"
          class="link-button"
      >
        Hier registrieren
      </button>
    </p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginWithEmail() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        this.$emit("onAuthenticated", user);
        console.log("Erfolgreich eingeloggt:", user);
      } catch (error) {
        console.error("Fehler beim Login mit E-Mail:", error.message);
      }
    },
    async loginWithGoogle() {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        this.$emit("onAuthenticated", user);
        console.log("Erfolgreich eingeloggt mit Google:", user);
      } catch (error) {
        console.error("Fehler beim Google-Login:", error.message);
      }
    },
  },
};
</script>

<style scoped>
</style>
