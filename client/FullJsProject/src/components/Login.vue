<script setup lang="ts">
import { ref } from 'vue'
import Email from './login/email.vue'
import Check from './login/test.vue'

const success = ref(false)
const animate = ref('animate-pulse')
function submitForm() {
  console.log('form submitted')
  success.value = true
}
</script>

<template>
      <div
      class="body w-screen md:h-screen items-center md:justify-center flex bg-slate-600"
    >
  <div
    v-if="!success"
    class="bg-white w-screen md:w-fit md:rounded-3xl md:p-4 md:flex-row flex-col-reverse flex items-center"
  >
    <div class="md:p-10">
      <div class="px-6 py-6 md:p-0">
        <span class="text-[#242742] text-[40px] font-semibold md:font-bold md:text-[50px]">
          Stay updated !
        </span>
      </div>
      <Check />
      <Email @submit="submitForm" />
    </div>
    <div class="w-[450px] flex-shrink-0">
      <img
        class="md:flex hidden h-[500px]"
        src="../assets/images/Checklist.jpg"
        alt=""
      />
    </div>
    <div class="flex items-center w-full">
      <img class="md:hidden w-full flex" src="../assets/mobil.svg" alt="" loading="lazy" />
    </div>
  </div>
  <div v-else>
    <Success />
  </div>
  </div>
</template>
