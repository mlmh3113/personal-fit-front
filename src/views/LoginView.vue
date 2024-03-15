<template>
  <div class=" flex flex-col md:w-2/3 md:mx-auto lg:w-3/6 bg-slate-200 dark:bg-slate-700 shadow-xl rounded-lg py-5 md:my-16  ">
    <FormKit

      type="form"
      id="loginForm"
      :actions="false"
      incomplete-message="No se pudo enviar, revisa las notificaciones"
      :classes="{
        message: 'text-center bg-slate-300 rounded-md py-1 mt-4 text-center ',
      }"
      @submit="login"
    >
      <FormKit
        type="text"
        name="email"
        label="Email"
        help="Ingresa 'admin@admin.com' para usuario Admin o 'usuario@usuario.com' para Usuario no administrador"
        validation="required|email"
        :validation-messages="{
          required: 'El email es requerido',
          email: 'El email no es valido',
        }"
        :classes="{
          help: 'text-xs text-center mt-1 text-teal-500',
            wrapper: 'w-4/5 mx-auto',
          input:
            'w-full shadow border border-gray-300 appearance-none rounded py-4 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
          label: 'block dark:text-white text-sm font-bold mb-2',
          message:'text-center mt-1'
        }"
      />

      <FormKit
        type="password"
        name="password"
        label="Password"
        help="Ingresa 'admin123' para usuario Admin o 'usuario123' para Usuario no administrador"
        validation="required"
        :validation-messages="{
          required: 'El password es requerido',
        
        }"
        :classes="{
          help: 'text-xs text-center mt-1 text-teal-500',
            wrapper: 'w-4/5 mx-auto',
          input:
            'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
          label: 'block dark:text-white text-sm font-bold mb-2',
          message:'text-center mt-1'
        }"
      />

      <div class="flex justify-center mt-10">
          <FormKit
            type="submit"
            label="Enviar"
            :classes="{
              input:
                'bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
            }"
          />
        </div>

        

    </FormKit>
  </div>
</template>

<script setup>
import { inject } from "vue";
import StudentsApi from "@/api/StudentsApi";
import { useRouter } from "vue-router";
import { useStudentsStore } from "@/stores/students";


const router = useRouter();
const studentsStore = useStudentsStore();

const toast = inject("toast");

const login = async (formData) => {
  try {
    const {data:{token}} = await StudentsApi.login(formData)
    toast.open({ message: "Login exitoso", type: "success" })
    localStorage.setItem("token", token)
    studentsStore.user = await StudentsApi.auth()
    studentsStore.isAdmin = studentsStore.user.data.admin
    studentsStore.isAuthenticated = true
    router.push({name: 'index'})   
  }catch(error){
    toast.open({ message: error.response.data.error, type: "error" })
  }
}




</script>
