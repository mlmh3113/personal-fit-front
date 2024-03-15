<template>
  <div>
    <div class="w-2/3 lg:w-3/6 mx-auto rounded-lg p-10 bg-slate-200 dark:bg-slate-700">
      <h1 class="text-center text-4xl uppercase font-bold mb-10 dark:text-white">
        {{ student.name }} {{ student.surname }}
      </h1>
      <div class="grid grid-cols-2 gap-5">
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold"><span>Edad: </span>{{ student.age }}</p>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div class="bg-slate-300 p-1 rounded">
            <p class="font-bold">
              <span>Estatura: </span>{{ student.height }}m
            </p>
          </div>
          <div class="bg-slate-300 p-1 rounded">
            <p class="font-bold"><span>Peso: </span>{{ student.weigth }}</p>
          </div>
        </div>

        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold"><span>Email: </span>{{ student.email }}</p>
        </div>
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold">
            <span>Fecha de Alta: </span>{{ formatDate(student.createdAt) }}
          </p>
        </div>

     

        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold"><span>Objetivos: </span>{{ student.goals }}</p>
        </div>
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold">
            <span>Entrenamiento Semanal: </span>{{ student.times_per_week }}
          </p>
        </div>
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold">
            <span>Antecedentes medicos: </span>{{ student.medical_history }}
          </p>
        </div>
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold">
            <span>Enfermedades fisicas: </span>{{ student.physical_illness }}
          </p>
        </div>
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold">
            <span>Ha entrenado antes: </span>{{ student.has_trained }}
          </p>
        </div>
        <div class="bg-slate-300 p-1 rounded">
          <p class="font-bold">
            <span>Descripcion: </span>{{ student.description }}
          </p>
        </div>

        <hr class="col-span-2 bg-teal-500 h-1 border-none" />

        <div class="bg-slate-300 p-1 rounded">
          <h2 class="font-bold">Entrenamiento Seleccionado/s:</h2>
          <ul>
            <li v-for="training in student.type" :key="training._id">
              {{ training }}
            </li>
          </ul>
        </div>

        <div class="bg-slate-300 p-1 rounded">
          <div>
            <p class="font-bold">Indice de Masa Corporal:</p>
            <div class="flex justify-center">
                  <p
              class="font-bold text-white inline-block rounded p-1"
              :class="imcColor(imcValue)"
            >
              {{ imcValue }}
            </p>
            </div>
          
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <RouterLink
          class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          :to="{ name: 'all-students' }"
          >Volver</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStudentsStore } from "@/stores/students";
import { useRoute } from "vue-router";
import { formatDate, IMC } from "../../helpers/index.js";

const route = useRoute();
const studentsStore = useStudentsStore();

const student = ref({});
const imcValue = ref(0);

const imcColor = () => {
  if (imcValue.value < 18.5) {
    return "bg-red-500";
  }
  if (imcValue.value >= 18.5 && imcValue.value <= 24.9) {
    return "bg-green-500";
  }
  if (imcValue.value >= 25 && imcValue.value <= 29.9) {
    return "bg-yellow-500";
  }
  if (imcValue.value >= 30) {
    return "bg-red-500";
  }
};

onMounted(async () => {
  try {
    student.value = await studentsStore.getStudentbyId(route.params.id);
    imcValue.value = IMC(student.value.weigth, student.value.height);
  } catch (error) {
    console.log(error);
  }
});
</script>
