import api from "../lib/axios";

export default {
  all() {
    return api.get("/students");
  },
  getById(id) {
    return api.get(`/students/${id}`);
  },
  create(data) {
    return api.post("/students/new-student", data);
  },
  confirmAccount(token) {
    return api.get(`/students/verify/${token}`);
  },

  login(data) {
    return api.post("/students/login", data);
  },
  auth(){
    return api.get("/students/user", {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
  }
  
};
