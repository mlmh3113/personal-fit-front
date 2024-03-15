<script setup>
import { inject } from "vue";
import { reset } from "@formkit/vue";
import StudentsApi from "@/api/StudentsApi.js";

const toast = inject("toast");

const handleSubmit = async (formData) => {
  try {
    const { data } = await StudentsApi.create(formData);
    toast.open({ message: data.message, type: "success" });
    reset("registerForm");
  } catch(error){
    toast.open({ message: error.response.data.msg, type: "error" });
  }
};
</script>

<template>
 

  <div class="mb-10">
    <div
      class="flex flex-col md:px-20 md:max-w-4xl md:mx-auto bg-slate-400 rounded-lg py-5 shadow-2xl"
    > <h1 class="text-4xl  font-semibold text-center mb-10">
    Crea Tu Cuenta
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
        <div class="md:flex">
          <FormKit
            type="text"
            name="name"
            label="Nombre"
            validation="required"
            :validation-messages="{ required: 'El nombre es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/3',
            }"
          />

          <FormKit
            type="text"
            name="surname"
            label="Apellido"
            validation="required"
            :validation-messages="{ required: 'El apellido es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/3',
            }"
          />
          <FormKit
            type="email"
            name="email"
            label="Email"
            validation="required|email"
            :validation-messages="{
              required: 'El email es requerido',
              email: 'Email no valido',
            }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full  text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/3',
            }"
          />
        </div>

        <div class="md:flex">
          <FormKit
            type="number"
            name="age"
            label="Edad"
            validation="required"
            :validation-messages="{ required: 'La edad es requerida' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/3',
            }"
          />

          <FormKit
            type="number"
            name="weigth"
            label="Peso"
            validation="required"
            :validation-messages="{ required: 'El peso es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/3',
            }"
          />
          <FormKit
            type="text"
            name="height"
            placeholder="Ejemplo : 1.75"
            label="Altura"
            validation="required"
            :validation-messages="{ required: 'La altura es requerida' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full  text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/3',
            }"
          />
        </div>

        <div class="md:flex">
          <FormKit
            type="password"
            name="password"
            label="Password"
            validation="required"
            :validation-messages="{ required: 'El nombre es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />

          <FormKit
            type="password"
            name="password_confirm"
            label="Confirmar Password"
            validation="required|confirm"
            validation-label="Password confirmation"
            :validation-messages="{
              required: 'El password es requerido',
              confirm: 'El password no coincide',
            }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />
        </div>

        <div class="md:flex">
          <FormKit
            label="Cual es el objetivo, que te gustaria lograr con el entrenamiento?🤔"
            type="textarea"
            name="goals"
            validation="required"
            :validation-messages="{ required: 'El objetivo es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />

          <FormKit
            label="Cuantas veces por semana podes/queres entrenar?💪"
            type="textarea"
            name="times_per_week"
            validation="required"
            :validation-messages="{
              required: 'Las veces por semana son requeridas',
            }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />
        </div>

        <div class="md:flex">
          <FormKit
            label="Antecedentes medicos?🏥"
            type="textarea"
            name="medical_history"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />

          <FormKit
            label="Alguna molestia/dolencia fisica?🧘‍♀️"
            type="textarea"
            name="physical_illness"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />
        </div>

        <div>
          <FormKit
            label="Tu dia a dia, descanso, alimentacion, trabajo y todos los aspectos que consideres importantes que puedan repercutir en tu desempeño fisico.✌"
            validation="required"
            name="description"
            :validation-messages="{ required: 'La descripcion es requerida' }"
            type="textarea"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2',
            }"
          />
        </div>

        <div class="md:flex">
          <FormKit
            type="select"
            label="Venias entrenando?🙌"
            name="has_trained"
            placeholder="Selecciona una respuesta"
            validation="required"
            :validation-messages="{ required: 'Es requerido' }"
            :options="[
              'Entreno todos los dias💪',
              'Si, hace mas de 12 meses',
              'No, hace mas de 12 meses',
              'No entreno hace mas de 2/3 años',
            ]"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />

          <FormKit
            type="checkbox"
            label="Que tipo de entrenamiento te gustaria realizar?🏋️‍♂️"
            name="type"
            :options="[
              'Cardiovascular/Hit',
              'Definicion',
              'Hipertrofia',
              'Funcional/Gap',
              'Crosstraining',
              'Personalizado',
            ]"
            validation="required|min:1"
            :validation-messages="{ required: 'Es requerido al menos uno' }"
            :classes="{
              input:
                'shadow border border-gray-300 mr-2 appearance-none rounded text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />
        </div>
        <div class="mt-10">
          <FormKit
            type="checkbox"
            label="Estas dispuest@ a darlo todo?💪"
            name="motivated"
            :value="false"
            validation="accepted"
            :validation-messages="{ accepted: 'Es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 mr-2 appearance-none rounded text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-1/2',
            }"
          />
        </div>

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
  </div>
</template>
