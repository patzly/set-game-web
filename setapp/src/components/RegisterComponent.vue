<template>
  <div class="register-container">
    <h2 class="register-header">Registrieren</h2>
    <form @submit.prevent="registerWithEmail" class="register-form">
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
        <label for="password">Passwort:</label>
        <input
            type="password"
            v-model="password"
            id="password"
            required
            class="custom-input"
        />
      </div>
      <div class="input-group">
        <label for="confirmPassword">Passwort bestätigen:</label>
        <input
            type="password"
            v-model="confirmPassword"
            id="confirmPassword"
            required
            class="custom-input"
        />
      </div>
      <button type="submit" class="custom-button">Registrieren</button>
    </form>
    <button @click="registerWithGoogle" class="custom-button google-button">
      Registrieren mit Google
    </button>
    <p>
      Bereits ein Konto?
      <button
          @click="$emit('switch-to-login')"
          class="link-button"
      >
        Hier einloggen
      </button>
    </p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";

export default {
  name: "RegisterComponent",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async registerWithEmail() {
      if (this.password !== this.confirmPassword) {
        console.error("Passwörter stimmen nicht überein.");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        this.$emit("onAuthenticated", user);
        console.log("Erfolgreich registriert:", user);
      } catch (error) {
        console.error("Fehler bei der Registrierung mit E-Mail:", error.message);
      }
    },
    async registerWithGoogle() {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        this.$emit("onAuthenticated", user);
        console.log("Erfolgreich registriert mit Google:", user);
      } catch (error) {
        console.error("Fehler bei der Registrierung mit Google:", error.message);
      }
    },
  },
};
</script>

<style scoped>
</style>
