export const useTransitionSections = () => {
    const isReady = ref(false)

    onMounted(() => isReady.value = true)

    return {
        isReady
    }
}