<script setup lang="ts">
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
</script>

<template>
    <nav class="flex items-center">
        <ul class="flex items-center gap-x-10">
            <li
                v-for="item in navItems"
                :key="item.id"
                class="text-b2 font-medium"
            >
                <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>