<script setup lang="ts">
import { ref } from 'vue'
import { AuthServices } from '../services/AuthServices.vue';

const authServices = new AuthServices()

const email = ref('')
const password = ref('')
let errorLogin = ref(false)
const emit = defineEmits(['submit'])

async function submit() {
  try {
    await authServices.login({ email: email.value, password: password.value });
  } catch (error) {
    errorLogin.value = true
    console.error('Authentication failed:', error);
  }
}
function ValidateEmail(mail: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  return false
}
</script>

<template>
  <div class="grid gap-4 px-6 md:p-0 pb-6">
    <form class="w-full grid gap-4" @submit.prevent="submit">
      <div class="flex justify-between items-center">
        <span class="text-sm font-semibold">{{ $t('app.login.form.email-label') }}</span>
      </div>
      <input :class="errorLogin ? 'border-[#ff6257] bg-[#ff4a3d] bg-opacity-10' : 'border-[#9294a0]'" v-model="email"
        :placeholder="$t('app.login.form.email-placeholder')"
        class="w-full p-3 rounded border outline-none" />
      <div class="flex justify-between items-center">
        <span class="text-sm font-semibold">{{ $t('app.login.form.password-label') }}</span>
      </div>
      <input :class="errorLogin ? 'border-[#ff6257] bg-[#ff4a3d] bg-opacity-10' : 'border-[#9294a0]'" v-model="password"
        :placeholder="$t('app.login.form.password-placeholder')" type="password"
        class="w-full p-3 rounded border outline-none" />
      <button type="submit" class="bg-[#242742] text-white font-semibold w-full rounded p-3">
        {{ $t('app.login.form.submit-button') }}
      </button>
      <span class="text-[#ff6257] text-sm font-semibold text-center" v-if="errorLogin">{{ $t('app.login.form.error-label') }}</span>
    </form>
  </div>
</template>

<style></style>
