export const useMobileMenuStore = defineStore('mobile-menu-store', () => {
    const activeMobileMenu = ref(false)

    function openMobileMenu() {
        activeMobileMenu.value = true
    }

    function closeMobileMenu() {
        activeMobileMenu.value = false
    }

    function toggleMobileMenu() {
        activeMobileMenu.value = !activeMobileMenu.value
    }

    return {
        activeMobileMenu,

        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu
    }
})