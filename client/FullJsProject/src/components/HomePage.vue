<script setup lang="ts">
import Sidebar from './sidebar/Sidebar.vue'
import ToDoList from './todolist/ToDoList.vue'
import AddTask from './add-task/AddTask.vue'
import { ref, type Ref } from 'vue';

let isTaskSidebarActive: Ref<boolean> = ref(false)

function showTaskSidebar(value: boolean): void {
    isTaskSidebarActive.value = value
}

function hideTaskSidebar(value: boolean): void {
    isTaskSidebarActive.value = value
}


</script>
<template>
    <div class="flex h-full">
        <div class="w-60 p-4">
            <Sidebar />
        </div>
        <div class="flex-1 p-4 h-full ">
            <ToDoList @showTaskSidebar="showTaskSidebar" />
        </div>
        <div class="w-1/4 p-5 bg-gray-100 m-3 rounded-2xl" v-if="isTaskSidebarActive">
            <AddTask @hideTaskSidebar="hideTaskSidebar" />
        </div>
    </div>
</template>