<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>

<template>
    <div class="relative lg:mr-8">
        <div class="hidden lg:block rounded-2lg absolute left-8 bottom-8 bg-gradient-to-bl from-blue-sky to-white h-full w-full" />

        <div class="relative rounded-2lg overflow-hidden">
            <img :src :alt />
        </div>
    </div>
</template>