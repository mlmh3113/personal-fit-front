<template>
    <div>
        <h1 class="text-4xl text-white font-semibold text-center mb-10">Estudiantes</h1>
    </div>

    <div 
    class=" md:grid md:grid-cols-3 lg:grid-cols-4 space-y-10 md:space-y-0 w-10/12 gap-10 text-center text-white mx-auto">

        <StudentCard
        class="col-span-1 w-full  mx-auto"
         v-for="student in studentsStore.students" :key="student.id" :student="student" />
    </div>


</template>

<script setup>
import { onMounted  } from 'vue';
import StudentCard from '../../components/students/StudentCard.vue'

import {useStudentsStore} from '@/stores/students.js'
import StudentsApi from '@/api/StudentsApi'

const studentsStore = useStudentsStore()



  onMounted(async () => {
        try {
        const {data} = await StudentsApi.all()
        studentsStore.students = data
    } catch (error) {
        console.log(error)   
    }   
    })



</script>

