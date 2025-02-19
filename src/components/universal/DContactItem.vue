<script setup lang="ts">
import type { InfoItem } from '~/types/contacts';

withDefaults(defineProps<InfoItem>(), {
    color: 'blue'
})
</script>

<template>
    <div
        class="bg-white flex items-center rounded-2lg overflow-hidden px-4 py-6 lg:p-5
            border border-blue-sky lg:border-none shadow-[0_5px_50px_0_rgba(0,0,0,0.08)]"
    >
        <div
            class="rounded-full bg-blue h-14 w-14 mr-4 relative shrink-0"
            :class="`bg-${color}`"
        >
            <img
                :src="`./icons/${icon}.svg`"
                :alt="`${icon} icon`"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"    
            >
        </div>

        <div class="flex flex-col">
            <span class="text-b1 font-medium">{{ title }}</span>
            <span
                v-for="(item, i) in data"
                :key="i"
                class="text-b2 text-text"    
            >
                {{ item }}
            </span>
        </div>
    </div>
</template>