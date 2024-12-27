<script setup lang="ts">
import type { PostItem } from '~/types/blog'

defineProps<PostItem>()
</script>

<template>
    <div class="rounded-md bg-blue-light pt-5 px-5 pb-2.5">
        <div class="w-full rounded-md overflow-hidden h-[230px] mb-6">
            <img
                :src="photo"
                :alt="`${title} - post image`"
                class="h-full w-full object-cover object-center"
            >
        </div>

        <nuxt-link :to="route" class="rounded-md text-white w-fit px-3 py-1 bg-blue-dark">
            <span class="text-b2 font-medium">Self care</span>
        </nuxt-link>

        <h3 class="mt-3.5 mb-2.5 text-b1 font-medium text-blue-dark">
            {{ title }}
        </h3>

        <p class="text-b1 text-text">{{ description }}</p>

        <div class="flex justify-end mt-1 text-b2 text-blue-dark">
            ~<span>{{ author }}</span>
        </div>
    </div>
</template>