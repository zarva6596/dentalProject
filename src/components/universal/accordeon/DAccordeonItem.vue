<script setup lang="ts">
import type { AccordeonItem } from '~/types/accordeon';

defineProps<AccordeonItem & { active: boolean }>()
</script>

<template>
    <div
        class="rounded-md pt-6 px-5 lg:px-7 transition-all duration-500"
        :class="active ? 'bg-blue text-white' : 'text-text'"
    >
        <div
            class="flex items-center pl-1 border-b pb-2.5 lg:pb-5 cursor-pointer"
            :class="active ? 'text-white border-white' : 'text-blue-dark border-gray'"
            @click="$emit('open')" 
        >
            <div class="flex w-full">
                <div
                    class="h-1.5 w-1.5 rounded-full mr-2 shrink-0 mt-3 lg:mt-2.5"
                    :class="active ? 'bg-white' : 'bg-blue-dark'"
                />

                <h3 class="w-full text-b1 font-regular lg:font-medium mr-10 lg:mr-2">{{ title }}</h3>
            </div>

            <div
                class="rounded-full border-2 h-5 w-5 relative transition-all duration-500 shrink-0"
                :class="active ? 'border-white' : 'border-blue-dark'"   
            >
                <div
                    v-for="i in 2"
                    :key="i"
                    class="w-2 h-0.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    :class="[active ? 'bg-white' : 'bg-blue-dark', !active && i === 2 && 'rotate-90']"
                />
            </div>
        </div>

        <div
            class="accordion-description grid transition-all duration-500 overflow-hidden"
            :class="{ active }"
        >
            <div :class="active && 'pt-2.5 lg:pt-5 pb-5'" class="min-h-0 transition-all duration-500 px-1 lg:px-8">
                <p class="text-b1 font-light text-white">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.accordion-description {
    grid-template-rows: 0fr;
}

.accordion-description.active {
    grid-template-rows: 1fr;
}
</style>