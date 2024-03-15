import { defineStore } from "pinia";
import { ref , onMounted } from "vue";
import BlogApi from "@/api/BlogApi.js";


export const useBlogStore = defineStore("blog",()=> {
    
    const posts = ref()
    const lastPost = ref()

    return {
        posts,
        lastPost

    }
})

