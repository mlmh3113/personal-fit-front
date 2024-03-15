<template>


  <div class="mb-10">

 

    <div
      class="dark:text-white bg-slate-200 dark:bg-slate-700 shadow-2xl rounded-lg py-3 w-3/6 mx-auto"
    >

    <h1 class="text-4xl  font-semibold text-center my-5">
    Envianos tu consulta
  </h1>

      <FormKit
        id="registerForm"
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        :classes="{
          message: 'text-center bg-slate-300 rounded-md py-1 mt-4',
        }"
        @submit="handleSubmit"
      >
        <div class="flex flex-col items-center ">
          <FormKit
            type="text"
            name="user_name"
            label="Cual es tu nombre?"
            validation="required"
            :validation-messages="{ required: 'Tu nombre es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-2/3',
            }"
          />

          <FormKit
          type="email"
          name="user_email"
          label="Cual es tu email?"
          validation="required|email"
          :validation-messages="{
            required: 'El email es requerido',
            email: 'El email no es valido',
          }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-2/3',
            }"
          />



          <FormKit
            type="textarea"
            name="message"
            label="Cual es tu consulta?"
            validation="required"
            :validation-messages="{
              required: 'Debes escribir una consulta',
            }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-2/3',
            }"
          />

        </div>

        <div class="flex justify-center mt-2">
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
  </div>

  <div></div>
  

</template>

<script setup>
import emailjs from '@emailjs/browser';
import { inject } from 'vue';
import { reset } from '@formkit/vue';

const toast = inject('toast');

const sendEmail=() =>{
  emailjs.sendForm('service_4r45kg7', 'template_dftkgli', '#registerForm', 'XFiP0z73yV6l3viAI')}
    


const handleSubmit = async () => {
  try {
    sendEmail();
    toast.open({ message: "Email enviado", type: "success" });
    reset("registerForm");
  }catch(error) {
    toast.open({ message: "Error al enviar el email", type: "error" });
  }
}



</script>




