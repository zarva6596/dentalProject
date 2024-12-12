<script setup lang="ts">
import type { ServiceItem } from '~/types/services'

defineProps<{ item: ServiceItem }>()
</script>

<template>
    <div class="flex flex-col items-center py-8 px-9 bg-white rounded-2lg">
        <div class="w-[70px] aspect-square rounded-full bg-blue-sky flex items-center justify-center">
            <img :src="`/icons/services/${item.icon}.svg`" :alt="`${item.title} icon`">
        </div>

        <h3 class="mt-5 mb-3.5 text-h4 font-medium text-center whitespace-nowrap">
            {{ item.title }}
        </h3>

        <p class="text-b1 text-text text-center mb-4">{{ item.description }}</p>

        <nuxt-link :to="item.route" class="flex items-center justify-center">
            <span class="text-base underline mr-2.5">Learn More</span>

            <img src="~/assets/images/icons/arrorRightCircle.svg" alt="Arror right" />
        </nuxt-link>
    </div>
</template>