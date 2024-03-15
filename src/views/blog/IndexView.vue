<template>
  <div>
    <h1 class="text-4xl pt-5 font-semibold text-center mb-5 dark:text-white">
      Ultima Publicacion
    </h1>
  </div>

  <div
    v-if="studentsStore.isAuthenticated && studentsStore.isAdmin"
    class="py-2 flex justify-center dark:text-white"
  >
    <RouterLink
      class="hover:text-black p-2 mb-2 bg-teal-500 rounded-md"
      :to="{ name: 'new-post' }"
      >Crear nuevo Post</RouterLink
    >
  </div>

  <div
    v-if="indexLength > 0"
    class="flex flex-col items-center w-full mx-auto text-black"
  >
    <div
      class="w-4/5 lg:w-3/6 mx-auto mb-5 shadow-2xl rounded-lg dark:text-white bg-slate-200 dark:bg-slate-700"
    >
      <div
        v-if="studentsStore.isAdmin"
        class="flex justify-end gap-5 mr-2 mt-2"
      >

        <RouterLink :to="{ name: 'edit-post', params: { id: lastPost._id } }">
               <button
          class=" hover:text-white hover:bg-slate-700 p-2 rounded-full "
        >
          <svg
            class="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1703.754 1706.67"
          >
            <g id="Layer_x0020_1" transform="translate(-648.109 -646.68)">
              <path
                id="Path_155"
                data-name="Path 155"
                d="M1931.57,1967.82a26.665,26.665,0,0,0,37.71-37.71L1028.94,989.77a26.665,26.665,0,0,0-37.71,37.71l940.34,940.34Z"
                fill="currentColor"
              ></path>
              <path
                id="Path_156"
                data-name="Path 156"
                d="M719.81,718.35h0a246.228,246.228,0,0,1,347.32,0L2195.46,1846.68h0a26.507,26.507,0,0,1,7.09,12.71l147.95,459.13.07-.02a26.667,26.667,0,0,1-34.58,33.21l-457.34-151.24h-.04a26.594,26.594,0,0,1-10.88-6.86L719.79,1065.67a246.2,246.2,0,0,1,0-347.32Zm37.71,37.7h0a192.9,192.9,0,0,0,0,271.9L1881.4,2151.83l402.42,133.07-130.49-404.96L1029.43,756.04a192.924,192.924,0,0,0-271.9,0Z"
                fill="currentColor"
              ></path>
              <path
                id="Path_157"
                data-name="Path 157"
                d="M2060.15,2237.63a26.577,26.577,0,0,0,49.58,19.16,259.73,259.73,0,0,1,147.11-147.88,26.653,26.653,0,0,0-19.58-49.58,314.592,314.592,0,0,0-177.1,178.3Z"
                fill="currentColor"
              ></path>
              <path
                id="Path_158"
                data-name="Path 158"
                d="M1840.43,2177.13a26.634,26.634,0,1,0,53.12-3.96,263.241,263.241,0,0,1,15.39-111.26,261.708,261.708,0,0,1,154.27-154.36,263.963,263.963,0,0,1,111.41-15.44,26.634,26.634,0,1,0,3.96-53.12,316.682,316.682,0,0,0-133.7,18.57,314.543,314.543,0,0,0-204.46,319.59Z"
                fill="currentColor"
              ></path>
              <path
                id="Path_159"
                data-name="Path 159"
                d="M1183.75,872.67a26.665,26.665,0,0,0-37.71-37.71L992.46,988.54,836.42,1144.58a26.665,26.665,0,0,0,37.71,37.71l156.04-156.04,153.58-153.58Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>
        </RouterLink>
   
        <button
        @click="deletepost(lastPost.id)"
          class=" hover:text-red-500 hover:bg-slate-700 p-2 rounded-full"
        >
          <svg
            class="w-3 h-3"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60.963 60.842"
            style="enable-background: new 0 0 60.963 60.842"
            xml:space="preserve"
          >
            <path
              fill="currentColor"
              d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
	c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
	l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
	l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
	C61.42,57.647,61.42,54.687,59.595,52.861z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="p-2">
        <h2 class="text-4xl font-bold mb-5 text-center">
          {{ lastPost.title }}
        </h2>
        <img
          class="w-3/5 mx-auto rounded-md shadow-lg my-5"
          v-if="lastPost.image"
          :src="lastPost.image"
          :alt="lastPost.title"
        />
        <p class="text-sm">{{ lastPost.post_body }}</p>
      </div>

      <div class="flex justify-end mr-2 mb-2 gap-1">
        <p class="text-lg">{{ like }}</p>

        <button @click="likescount">
          <svg
            class="w-5 h-5"
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            enable-background="new 0 0 48 48"
          >
            <path
              :fill="liked ? 'red' : 'grey'"
              d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div v-else class="w-4/5 lg:w-3/6 mx-auto space-y-3 pt-5">
    <p class="text-center text-white text-3xl">Aun no hay publicaciones</p>
  </div>

  <hr />
  <div>
    <h2 class="text-4xl pt-5 font-semibold text-center mb-10 dark:text-white">
      Publicaciones Anteriores
    </h2>

    <div class="w-4/5 lg:w-3/6 mx-auto space-y-3 pt-5">
      <div
        class="dark:text-white bg-slate-200 dark:bg-slate-700 rounded-md shadow-2xl p-5 hover:bg-slate-300"
        v-for="(post, index) in posts.data"
        :class="index === indexLength - 1 ? 'hidden' : ''"
        :key="post.id"
      >        <div
            v-if="studentsStore.isAdmin"
            class="flex justify-end gap-5 mr-2 mt-2"
          >
            <button
              class="hover:text-teal-500 hover:bg-slate-700 p-2 rounded-full"
            >
              <svg
                class="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1703.754 1706.67"
              >
                <g id="Layer_x0020_1" transform="translate(-648.109 -646.68)">
                  <path
                    id="Path_155"
                    data-name="Path 155"
                    d="M1931.57,1967.82a26.665,26.665,0,0,0,37.71-37.71L1028.94,989.77a26.665,26.665,0,0,0-37.71,37.71l940.34,940.34Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_156"
                    data-name="Path 156"
                    d="M719.81,718.35h0a246.228,246.228,0,0,1,347.32,0L2195.46,1846.68h0a26.507,26.507,0,0,1,7.09,12.71l147.95,459.13.07-.02a26.667,26.667,0,0,1-34.58,33.21l-457.34-151.24h-.04a26.594,26.594,0,0,1-10.88-6.86L719.79,1065.67a246.2,246.2,0,0,1,0-347.32Zm37.71,37.7h0a192.9,192.9,0,0,0,0,271.9L1881.4,2151.83l402.42,133.07-130.49-404.96L1029.43,756.04a192.924,192.924,0,0,0-271.9,0Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_157"
                    data-name="Path 157"
                    d="M2060.15,2237.63a26.577,26.577,0,0,0,49.58,19.16,259.73,259.73,0,0,1,147.11-147.88,26.653,26.653,0,0,0-19.58-49.58,314.592,314.592,0,0,0-177.1,178.3Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_158"
                    data-name="Path 158"
                    d="M1840.43,2177.13a26.634,26.634,0,1,0,53.12-3.96,263.241,263.241,0,0,1,15.39-111.26,261.708,261.708,0,0,1,154.27-154.36,263.963,263.963,0,0,1,111.41-15.44,26.634,26.634,0,1,0,3.96-53.12,316.682,316.682,0,0,0-133.7,18.57,314.543,314.543,0,0,0-204.46,319.59Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_159"
                    data-name="Path 159"
                    d="M1183.75,872.67a26.665,26.665,0,0,0-37.71-37.71L992.46,988.54,836.42,1144.58a26.665,26.665,0,0,0,37.71,37.71l156.04-156.04,153.58-153.58Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </button>
            <button
              @click="deletePost(post._id)"
              class="hover:text-red-500 hover:bg-slate-700 p-2 rounded-full"
            >
              <svg
                class="w-3 h-3"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 60.963 60.842"
                style="enable-background: new 0 0 60.963 60.842"
                xml:space="preserve"
              >
                <path
                  fill="currentColor"
                  d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
	c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
	l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
	l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
	C61.42,57.647,61.42,54.687,59.595,52.861z"
                ></path>
              </svg>
            </button>
          </div>
        <RouterLink :to="{ name: 'blog-post', params: { id: post._id } }">
  
          <h3 class="text-2xl font-semibold pb-2">{{ post.title }}</h3>
          <p class="text-sm">{{ textTruncate(post.post_body) }}</p>
         
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBlogStore } from "@/stores/blog.js";
import BlogApi from "@/api/BlogApi";
import { useStudentsStore } from "@/stores/students.js";
import { RouterLink } from "vue-router";
import { inject } from 'vue'

const blogStore = useBlogStore();
const studentsStore = useStudentsStore();

const posts = ref({});
const lastPost = ref({});
const like = ref(0);
const liked = ref(false);
const indexLength = ref(0);

const toast = inject('toast');

onMounted(async () => {
  posts.value = await BlogApi.getPosts();
  lastPost.value = posts.value.data[posts.value.data.length - 1];
  indexLength.value = posts.value.data.length;

});

const likescount = () => {
  if (liked.value) {
    like.value = like.value - 1;
    liked.value = false;
  } else {
    like.value = like.value + 1;
    liked.value = true;
  }
};

const textTruncate = (text) => {
  return text.substring(0, 400) + "...";
};

const deletePost = async (id) => {

  if(!confirm("Seguro que quieres borrar este post")) return

      try {
    await BlogApi.deletePost(id);
    posts.value = await BlogApi.getPosts();
    lastPost.value = posts.value.data[posts.value.data.length - 1];
    indexLength.value = posts.value.data.length;
    toast.open({message : "Post eliminado" , type:"success"})
  } catch (error) {
    console.log(error);
  }
  

};
</script>
