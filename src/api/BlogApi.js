import api from "../lib/axios";

export default {

    getPosts() {
        return api.get("/posts");
    },

    getPost(id) {
        return api.get(`/posts/${id}`);
    },

    createPost(data) {
        return api.post("/posts/new-post", data);
    },

    deletePost(id) {
        return api.delete(`/posts/${id}`);
    },
    editPost(id, data) {
        return api.patch(`/posts/${id}`, data);
    }



 

}
