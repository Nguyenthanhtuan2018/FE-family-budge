<template>
  <div class="card" style="max-width:420px;margin:40px auto;">
    <h2>Login</h2>
    <div class="row" style="flex-direction:column; align-items:stretch; gap:10px;">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button :disabled="loading" @click="submit">Sign in</button>
      <p v-if="error" style="color:#b91c1c">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../stores/auth.js";

const router = useRouter();
const auth = useAuth();

const email = ref("admin@example.com");
const password = ref("123456");
const loading = ref(false);
const error = ref("");

async function submit(){
  error.value = "";
  loading.value = true;
  try{
    await auth.login(email.value, password.value);
    router.push("/");
  }catch(e){
    error.value = "Invalid email or password";
  }finally{
    loading.value = false;
  }
}
</script>
