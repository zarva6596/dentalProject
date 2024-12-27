<script setup lang="ts">
import { useNavStore } from '~/store/useNavStore'

const route = useRoute()

const { navItems } = storeToRefs(useNavStore())

function changeRoute(id: string) {
    navItems.value = navItems.value.map(item => ({ ...item, active: item.id === id }))
}

function checkRoutePath() {
    const id = navItems.value.find(item => item.route === route.path)?.id

    id && changeRoute(id)
}

onMounted(checkRoutePath)

const navBarActive = computed(() => navItems.value.some(item => item.active))

watch(() => route.path, checkRoutePath)
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