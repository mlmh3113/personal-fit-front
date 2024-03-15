<template>
    <div>
        <h1 class="text-4xl text-white font-semibold text-center mb-10" >Validacion de Cuenta</h1>
    </div>

    <div class="w-2/3 lg:w-3/6 mx-auto shadow-2xl rounded-lg p-10 bg-slate-400"
     v-if="!mensaje">
        <h1 class="text-4xl text-red-500 font-semibold text-center" >{{ mensaje }}</h1>

    </div>
</template>

<script setup>
import { useRouter , useRoute } from 'vue-router';
import { onMounted , inject , ref } from 'vue';
import StudentsApi from '@/api/StudentsApi';


const router = useRouter();
const route = useRoute();
const token = route.params.token
const toast = inject("toast");

const mensaje = ref("Error al confirmar la cuenta, intentalo de nuevo o comunicate con el administrador.") 



onMounted(() => {
    try {
       StudentsApi.confirmAccount(token)
       toast.open({ message: "Cuenta confirmada con exito", type: "success" })
       router.push({ name: "login" })
    
    } catch (error) {
        toast.open({ message: error.response.data.msg, type: "error" })
        mensaje.value = "Error al confirmar la cuenta, intentalo de nuevo o comunicate con el administrador"
        console.log(error.response.data.msg)

    }
    
   
})

</script>