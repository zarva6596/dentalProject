<script setup lang="ts">
const route = useRoute()

const navItems = ref([
    {
        active: false,
        id: '1',
        title: 'Home',
        route: '/',
    },
    {
        active: false,
        id: '2',
        title: 'Services',
        route: '/services',
    },
    {
        active: false,
        id: '3',
        title: 'Blogs',
        route: '/blogs',
    },
    {
        active: false,
        id: '4',
        title: 'About',
        route: '/about',
    },
    {
        active: false,
        id: '5',
        title: 'Contacts',
        route: '/contacts',
    }
])

function changeRoute(id: string) {
    navItems.value = navItems.value.map(item => ({ ...item, active: item.id === id }))
}

onMounted(() => {
    const id = navItems.value.find(item => item.route === route.path)?.id

    id && changeRoute(id)
})

const navBarActive = computed(() => navItems.value.some(item => item.active))
</script>

<template>
    <nav
        class="flex items-center text-blue-dark transition-all duration-100"
        :class="navBarActive ? 'opacity-100' : 'opacity-0'"    
    >
        <ul class="flex items-center gap-x-9">
            <li
                v-for="item in navItems"
                :key="item.id"
                class="text-b2"
                :class="item.active ? 'font-semibold' : 'font-medium'"
                @click="changeRoute(item.id)"
            >
                <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>