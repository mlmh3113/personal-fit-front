<script setup>
import { inject, ref } from "vue";
import { reset } from "@formkit/vue";
import StudentsApi from "@/api/StudentsApi.js";
import BlogApi from "@/api/BlogApi";
import { useRouter } from "vue-router";


const imageUrl = ref("");
const router = useRouter();

const widget = window.cloudinary.createUploadWidget(
  {
    cloud_name: "dkoocayxp",
    upload_preset: "upload-demo",
  },

  (error, result) => {
    if (!error && result && result.event === "success") {
      imageUrl.value = result.info.url;
    }
  }
);

const openUploadWidget = () => {
  widget.open();
};

const toast = inject("toast");

const handleSubmit = async (formData) => {
  try {
    formData.image = imageUrl.value;
    await BlogApi.createPost(formData);
    toast.open({ message: "Post Creado", type: "success" });
    reset("registerForm");
    router.push({ name: "blog" });
  } catch (error) {
    toast.open({ message: "No se pudo crear", type: "error" });
  }
};
</script>

<template>
  <h1 class="text-4xl text-white font-semibold text-center mb-10">
    Crea Tu Cuenta
  </h1>

  <div class="mb-10">
    <div class="bg-slate-400 rounded-lg py-3 w-3/6 mx-auto">
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
        <div class="flex flex-col items-center">
          <FormKit
            type="text"
            name="title"
            label="Titulo"
            validation="required"
            :validation-messages="{ required: 'El titulo es requerido' }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-2/3',
            }"
          />

          <FormKit
            type="textarea"
            name="post_body"
            label="Cuerpo de la publicacion"
            validation="required"
            :validation-messages="{
              required: 'La publicacion debe tener contenido',
            }"
            :classes="{
              input:
                'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50',
              outer: 'mb-4 mx-2 md:mr-2 md:w-2/3',
            }"
          />

          <FormKit
            type="button"
            label="deseas agregar una imagen a la publicacion?"
            name="image"
            @click="openUploadWidget"
            :classes="{
              input:
                'hover:bg-teal-700 hover:border-white border border-teal-700 appearance-none rounded text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
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

  <div></div>
</template>
