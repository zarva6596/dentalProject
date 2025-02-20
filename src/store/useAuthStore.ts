export const useAuthStore = defineStore('auth-store', () => {
    const user = ref({})

    const logged = ref(false)
    
    return {
        user,
        logged
    }
})