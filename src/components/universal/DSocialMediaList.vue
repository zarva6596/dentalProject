<script setup lang="ts">
const socialMediaList = ref([
    {
        id: '1',
        title: 'Facebook',
        url: 'https://facebook.com',
        icon: '/icons/socialMedia/facebook.svg'
    },
    {
        id: '2',
        title: 'Instagram',
        url: 'https://instagram.com',
        icon: '/icons/socialMedia/instagram.svg'
    },
    {
        id: '3',
        title: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: '/icons/socialMedia/linkedin.svg'
    },
    {
        id: '4',
        title: 'Twitter',
        url: 'https://twitter.com',
        icon: '/icons/socialMedia/twitter.svg'
    },
    {
        id: '5',
        title: 'YouTube',
        url: 'https://youtube.com',
        icon: '/icons/socialMedia/youtube.svg'
    },
])
</script>

<template>
    <div>
        <ul class="flex items-center gap-x-2.5 lg:gap-x-5">
            <li
                v-for="item in socialMediaList"
                :key="item.id"
                class="transition-all duration-500 hover:opacity-50"
            >
                <a :href="item.url" target="_blank">
                    <img
                        :src="item.icon"
                        :alt="`${item.title} icon`"
                        class="grayscale opacity-50 lg:grayscale-0 lg:opacity-100"
                    >
                </a>
            </li>
        </ul>
    </div>
</template>