<template>
    <div 
    class=" mx-auto bg-slate-200 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700
    hover:bg-slate-300 dark:hover:bg-gray-700
    ">
        <RouterLink :to="{ name: 'student', params: { id: student._id }}">
        <div class="flex flex-col items-center pb-10 ">
            <div class="pt-3">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src=student.image  :alt=student.name>
            </div>
           
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ student.name }}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ student.email }}</span>
            <div class="flex mt-4 space-x-3 md:mt-6">

            </div>

        </div>
        </RouterLink>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    student: Object
})

</script>
