<script setup lang="ts">
const navItems = ref([
    {
        active: true,
        id: '1',
        title: 'Home',
        route: '/',
    },
    {
        id: '2',
        title: 'Services',
        route: '/services',
    },
    {
        id: '3',
        title: 'Blogs',
        route: '/blogs',
    },
    {
        id: '4',
        title: 'About',
        route: '/about',
    },
    {
        id: '5',
        title: 'Contacts',
        route: '/contacts',
    }
])

function changeRoute(id: string) {
    navItems.value = navItems.value.map(item => ({ ...item, active: item.id === id }))
}
</script>

<template>
    <nav class="flex items-center text-blue-dark">
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