<script setup lang="ts">
import { ref } from 'vue'
import FormLogin from './login/FormLogin.vue'

const success = ref(false)
const animate = ref('animate-pulse')
function submitForm() {
  console.log('form submitted')
  success.value = true
}
</script>

<template>
  <div class="body w-screen md:h-screen items-center md:justify-center flex bg-[#27293F]">
    <div
      v-if="!success"
      class="bg-white w-screen md:w-fit md:rounded-3xl md:p-4 md:flex-row flex-col-reverse flex items-center"
    >
      <div class="md:p-10">
        <div class="w-[350px]">
          <div class="px-6 py-6 mb-4 md:p-0">
            <span class="text-[#242742] text-[40px] font-semibold md:font-bold md:text-[50px]">
              {{ $t('app.login.title') }}
            </span>
          </div>
          <!-- <Check /> -->
          <FormLogin @submit="submitForm" />
        </div>
      </div>
      <div class="w-[450px] flex-shrink-0">
        <img class="md:flex hidden h-[500px]" src="../assets/images/Checklist.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
