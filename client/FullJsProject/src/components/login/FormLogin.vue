<script setup lang="ts">
import { ref } from 'vue'
import { AuthServices } from '../services/AuthServices.vue';

const authServices = new AuthServices()

const email = ref('')
const password = ref('')
const error = ref(false)
const emit = defineEmits(['submit'])

function submit() {
  try {
    authServices.login({ email: email.value, password: password.value });
  } catch (error) {
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
        <span class="text-[#ff6257] text-sm font-semibold" v-if="error">Valid email required</span>
      </div>
      <input :class="error ? 'border-[#ff6257] bg-[#ff4a3d] bg-opacity-10' : 'border-[#9294a0]'" v-model="email"
        :placeholder="$t('app.login.form.email-placeholder')" type="email"
        class="w-full p-3 rounded border outline-none" />
      <div class="flex justify-between items-center">
        <span class="text-sm font-semibold">{{ $t('app.login.form.password-label') }}</span>
        <span class="text-[#ff6257] text-sm font-semibold" v-if="error">Valid email required</span>
      </div>
      <input :class="error ? 'border-[#ff6257] bg-[#ff4a3d] bg-opacity-10' : 'border-[#9294a0]'" v-model="password"
        :placeholder="$t('app.login.form.password-placeholder')" type="password"
        class="w-full p-3 rounded border outline-none" />
      <button type="submit" class="bg-[#242742] text-white font-semibold w-full rounded p-3">
        {{ $t('app.login.form.submit-button') }}
      </button>
    </form>
  </div>
</template>

<style></style>
