<template>
  <div
    class="flex flex-col mx-auto md:grid md:grid-cols-2 gap-4 p-10 dark:bg-gray-900 dark:text-white"
  >
    <div class="flex flex-col justify-center w-full col-span-1">
      <img
        class="flex mx-auto object-cover border-2 border-teal-500 p-3 w-64 h-64 rounded-full"
        src="../assets/img/fitness_11.jpg"
        alt="training_11"
      />
    </div>

    <div
      class="flex flex-col text-center md:text-start items-center w-full col-span-1 justify-evenly gap-5"
    >
      <h2 class="text-4xl uppercase tracking-widest">
        Meet <span class="cursive text-teal-500 text-6xl">Personal Fit</span>
      </h2>

      <p>
        "¡Bienvenido a mi mundo de transformación y bienestar! Soy X, tu
        entrenador personal dedicado a guiarte en el camino hacia una vida más
        saludable y activa. Con años de experiencia en el fitness y un enfoque
        personalizado, estoy comprometido a ayudarte a alcanzar tus metas de
        acondicionamiento físico de manera efectiva y sostenible. Mi enfoque va
        más allá del simple ejercicio; trabajaremos juntos para desarrollar un
        plan integral que se adapte a tu estilo de vida y metas específicas. Ya
        sea que busques perder peso, aumentar tu fuerza o mejorar tu salud en
        general, estoy aquí para brindarte el apoyo y la motivación que
        necesitas. Descubre el potencial de tu cuerpo, desafía tus límites y
        alcanza tu mejor versión con mi asesoramiento profesional. ¡Juntos,
        lograremos resultados extraordinarios que transformarán tu vida para
        siempre!"
      </p>

      <RouterLink :to="{ name: 'about' }"
        ><button
          type="button"
          class="text-gray-900 bg-white dark:bg-slate-500 uppercase hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          Lear More
        </button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
