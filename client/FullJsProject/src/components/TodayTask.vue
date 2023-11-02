<script setup lang="ts">
import Sidebar from './sidebar/Sidebar.vue'
import ToDoList from './todolist/ToDoList.vue'
import Calendar from './calendar/Calendar.vue'
</script>
<template>
    <div class="flex">
        <div class="w-1/6 p-4">
            <Sidebar />
        </div>
        <div class="flex-1 p-4">
        </div>
        <div class="w-1/4 p-4">
        </div>
    </div>
</template>