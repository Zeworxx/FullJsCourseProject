<script setup lang="ts">
import type { TopicsData } from '@/models/app.model'
import { onMounted, ref, type Ref } from 'vue'
import { TodolistServices } from '../services/TodolistServices.vue';

const todolistService = new TodolistServices()

// Change it with API endpoint
const topicsList: Ref<TopicsData[] | null> = ref(null)

function fetchTopics(): void {
  todolistService.getTopics(1).then((response: any) => {
    topicsList.value = response.data
  })
}

onMounted(() => {
  fetchTopics();
});

const emits = defineEmits(['hideTaskSidebar'])
function submitForm(submitEvent: any) {
  console.log(submitEvent)
  emits('hideTaskSidebar', false);
}
</script>

<template>
  <div class="absolute top-5 right-5 hover:cursor-pointer" @click="emits('hideTaskSidebar', false)">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>
  <div class="flex flex-col mb h-full">
    <div class="mb-6 flex flex-row items-center flex-wrap">
      <h1 class="flex text-2xl font-bold">{{ $t('app.add-task-sidebar.title') }}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 ml-2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    </div>
    <form action="" class="h-full flex flex-col" @submit.prevent="submitForm">
      <div class="mb-6">
        <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {{ $t('app.add-task-sidebar.task-name-label') }}</label>
        <input type="text" id="task"
          class="bg-gray-50 border border-gray-300 hover:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          :placeholder="$t('app.add-task-sidebar.task-name-placeholder')" required />
      </div>
      <div class="mb-6">
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
          $t('app.add-task-sidebar.task-description-label')
        }}</label>
        <textarea id="content" rows="4"
          class="block p-2.5 w-full text-sm hover:border-blue-500 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          :placeholder="$t('app.add-task-sidebar.task-description-placeholder')"></textarea>
      </div>
      <div class="mb-6 flex w-full">
        <div class="w-1/2">
          <label for="select-task-topic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ $t('app.add-task-sidebar.task-topic-label') }}</label>
          <select id="select-task-topic" required
            class="hover:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="topic in topicsList" :key="topic.userId">{{ topic.topicName }}</option>
          </select>
        </div>
        <div class="w-1/2">
          <label for="select-priority-level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-11/12">
            {{ $t('app.add-task-sidebar.task-priority-level') }}</label>
          <input required type="number" id="select-priority-level" min="1" max="5"
            :placeholder="$t('app.add-task-sidebar.task-priority-level-placeholder')"
            class="hover:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
      <div class="mb-6">
        <div>
          <label required for="task-start-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ $t('app.add-task-sidebar.task-start-date-label') }}</label>
        </div>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input type="datetime-local" id="task-start-date"
            class="hover:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
      <div class="mb-6">
        <div>
          <label for="task-end-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ $t('app.add-task-sidebar.task-end-date-label') }}</label>
        </div>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input type="datetime-local" id="task-end-date"
            class="hover:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
      <div class="flex space-x-0 justify-evenly mt-auto">
        <button @click="$emit('hideTaskSidebar', false)" type="button"
          class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {{ $t('app.add-task-sidebar.cancel-task-button') }}</button><button type="submit" value="Submit"
          class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {{ $t('app.add-task-sidebar.validate-task-button') }}
        </button>
      </div>
    </form>
  </div>
</template>
