<script setup lang="ts">
import type { UserData } from '@/models/app.model'
import { type Ref, ref } from 'vue'

const userData: Ref<UserData> = ref({
  firstName: 'Baptiste'
})
</script>

<template>
  <div class="p-4">
    <div>
      <h1 class="flex items-center text-5xl font-extrabold dark:text-white mb-3">
        {{
          $t('app.todolist.welcome-title', {
            name: userData.firstName
          })
        }}
      </h1>
      <h2 class="ml-1 text-4xl font-semibold text-gray-300 dark:text-gray-400">
        {{ $t('app.todolist.second-title') }}
      </h2>
      <hr class="h-0.5 my-8 bg-gray-200 border-1 dark:bg-gray-700" />
    </div>
    <div class="mt-4" @click="$emit('showTaskSidebar', true)">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>{{ $t('app.todolist.add-task-button') }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  </div>
</template>
