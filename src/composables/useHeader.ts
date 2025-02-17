export const useHeader = () => {
    const route = useRoute()

    const whiteRouteList = ['services']

    const isWhite = computed(() => whiteRouteList.some(item => route.path.includes(item)))

    return {
        isWhite
    }
}