<template>
  <div>
    <div class="w-4/5 lg:w-3/6 mx-auto">
      <div
         class=" bg-slate-200  dark:bg-slate-400 rounded-md shadow-md p-5 hover:bg-slate-300 space-y-5"
      >
        <h1 class="text-2xl font-semibold pb-2">{{ blog.title }}</h1>
        <img class="shadow-2xl rounded-md" v-if="blog.image" :src="blog.image" :alt="blog.title" />
        <p class="text-sm">{{ blog.post_body }}</p>

        <div class="flex justify-center gap-5 mr-2">
          <RouterLink class="hover:text-teal-500 border py-1 px-3 rounded-md" :to="{ name: 'blog' }"
            >Volver</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BlogApi from "@/api/BlogApi";

const route = useRoute();
const id = route.params.id;

const blog = ref({});

onMounted(async () => {
  const response = await BlogApi.getPost(id);
  blog.value = response.data;
});
</script>
