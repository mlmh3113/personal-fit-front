import { ref, onMounted , computed, watch } from "vue";
import { defineStore } from "pinia";
import StudentsApi from "@/api/StudentsApi.js";



export const useStudentsStore = defineStore("students",()=> {

    const isAuthenticated = ref(false)

    const students = ref({})
    const student = ref({})
    const user = ref({})
    const isAdmin = ref(false)

 
  

    const getStudentbyId = async (id) => {
        try {
            const {data} = await StudentsApi.getById(id)
            return data
        }catch (error) {
            console.log(error)
        }
    }

    const createStudent = async (data) => {

        try {
            const response = await StudentsApi.create(data)
            return response
        }   catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        isAuthenticated.value = false
        user.value = null
        localStorage.removeItem("token")
        window.location.reload()

    }


    return {
        student,
        students,
        user,
        getStudentbyId,
        createStudent,
        isAuthenticated,
        logout,
        isAdmin
        
    }
})

