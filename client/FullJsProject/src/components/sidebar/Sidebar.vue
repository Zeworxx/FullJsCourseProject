<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { type UserData, type TopicsData } from 'src/models/app.model'
import { UserServices } from '../services/UserServices.vue';
import { TodolistServices } from '../services/TodolistServices.vue';
const UserService = new UserServices()
const TodolistService = new TodolistServices()

let userData: Ref<UserData | null> = ref(null)

const userTopicsData: Ref<TopicsData[] | null> = ref(null)

let isActive: Ref<boolean> = ref(true)
function isLogged() {
  return isActive.value
}

function fetchUserData(): void {
  UserService.getUserById(1).then((response: any) => {
    userData.value = response.data
  })
}

function fetchTopics(): void {
  TodolistService.getTopics(1).then((response: any) => {
    userTopicsData.value = response.data
  })
}

onMounted(() => {
  fetchUserData();
  fetchTopics();
});


function toggle() {
  isActive.value = !isActive.value
}

function addTopic(userId: number | undefined) {
  TodolistService.addTopic(userId)
  fetchTopics()
}
</script>
<template>
  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
      </path>
    </svg>
  </button>

  <aside id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div class="mb-5 flex w-full" v-if="isLogged()">
        <div class="flex flex-col ml-4 w-full">
          <div class="flex flex-row mb-4">
            <div
              class="relative w-14 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border border-gray-300">
              <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                </path>
              </svg>
            </div>
            <span class="flex flex-wrap content-center ml-3 w-full">
              <p>{{ $t('app.sidebar.name-account', { name: userData?.firstname }) }}</p>
            </span>
          </div>
          <button type="button" @click="toggle()"
            class="border border-blue-500 text-blue-500 bg-gray-50 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t('app.sidebar.logout-button') }}
          </button>
        </div>
      </div>
      <div class="flex justify-center mb-5" v-else>
        <button type="button" @click="toggle()"
          class="border border-blue-500 text-blue-500 bg-gray-50 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {{ $t('app.sidebar.login-button') }}
        </button>
      </div>
      <ul class="space-y-2 font-medium">
        <RouterLink to="/">
          <li class="mb-2">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

              <span class="ml-3">{{ $t('app.sidebar.items.task-handler') }}</span>
            </a>
          </li>
        </RouterLink>
        <RouterLink to="/today-task">
          <li class="mb-2">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>

              <span class="ml-3">{{ $t('app.sidebar.items.today-task') }}</span>
            </a>
          </li>
        </RouterLink>
        <RouterLink to="/seven-day-task">
          <li class="mb-2">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>

              <span class="ml-3">{{ $t('app.sidebar.items.seven-day-task') }}</span>
            </a>
          </li>
        </RouterLink>
      </ul>
      <div class="flex flex-col mt-5 p-2">
        <div class="font-bold text-2xl">
          <h1>{{ $t('app.sidebar.task-topic-list.main-title') }}</h1>
        </div>
        <div
          class="flex mt-2 mb-3 px-1 py-1 rounded font-semibold text-lg text-neutral-400 hover:cursor-pointer hover:bg-slate-200"
          @click="addTopic(userData?.userId)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#B0B0B0	"
            class="w-6 h-6 mt-0.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <h1 class="ml-4">{{ $t('app.sidebar.task-topic-list.add-topic-list') }}</h1>
        </div>
        <div class="flex px-2 py-2 flex-row mb-1 items-center hover:cursor-pointer rounded hover:bg-slate-200"
          v-for="userTopic in userTopicsData" :key="userTopic.userId">
          <div class="w-5 h-5 rounded-xl bg-amber-200"></div>
          <span class="ml-3">{{ userTopic.topicName }}</span>
          <span
            class="ml-auto bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 ">1</span>
        </div>
      </div>
    </div>
  </aside>
</template>
