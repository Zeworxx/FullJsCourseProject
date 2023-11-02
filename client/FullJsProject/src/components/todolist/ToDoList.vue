<script setup lang="ts">
import type { UserData } from '@/models/app.model';
import { type Ref, ref } from 'vue';

const userData: Ref<UserData> = ref({
    firstName: "Baptiste"
})
</script>

<template>
    <div class="p-4">
        <div>
            <h1 class="flex items-center text-5xl font-extrabold dark:text-white">{{ $t('app.todolist.welcome-title', {
                name:
                    userData.firstName
            }) }}</h1>
            <h2 class="ml-1 text-4xl font-semibold text-gray-300 dark:text-gray-400">{{ $t('app.todolist.second-title') }}
            </h2>
            <div class="border border-blue-200 border-solid mt-4 rounded"></div>
        </div>
    </div>
</template>