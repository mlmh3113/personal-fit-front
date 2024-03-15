<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue';
import { useStudentsStore } from './stores/students';
import StudentsApi from './api/StudentsApi';

const studentsStore = useStudentsStore();

onMounted(async () => {
    try {
        studentsStore.user = await StudentsApi.auth();
        studentsStore.isAdmin = studentsStore.user.data.admin;
        studentsStore.isAuthenticated = true;
    }catch(error){
        console.log(error);
    }
})



</script>

<template >

    

<Header />

<main class="mx-auto">
    <RouterView />
</main>

<Footer/>

</template>

<style>
.cursive {
    font-family: "Grape Nuts", cursive;
}

</style>
