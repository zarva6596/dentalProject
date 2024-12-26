<script setup lang="ts">
import type { TeamItem } from '~/types/team';

defineProps<TeamItem>()
</script>

<template>
    <div class="rounded-md p-4 relative flex flex-col justify-end w-full lg:max-w-[305px] aspect-square lg:h-[340px] overflow-hidden">
        <img
            :src="photo"
            :alt="`${name} ${position} photo`"
            class="absolute left-0 top-0 h-full w-full object-cover"
        >

        <a
            v-if="profileLink"
            :href="profileLink"
            target="_blank"
            class="absolute top-4 right-4 z-10"
        >
            <img
                src="~/assets/images/icons/LinkedIn.svg"
                alt="linkedIn icon"
            >
        </a>

        <div class="relative w-full rounded-md pt-6 px-3 pb-5 bg-gradient-to-r from-blue-sky to-gray text-white">
            <h3 class="text-h4 font-medium mb-1">{{ name }}</h3>
            <p class="text-b2 font-medium">{{ position }}.</p>
        </div>
    </div>
</template>