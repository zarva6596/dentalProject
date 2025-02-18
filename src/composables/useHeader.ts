export const useHeader = () => {
    const route = useRoute()

    const whiteRouteList = ['services', 'blogs', 'about', 'contacts']

    const isWhite = computed(() => whiteRouteList.some(item => route.path.includes(item)))

    return {
        isWhite
    }
}