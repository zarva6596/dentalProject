<script setup lang="ts">
defineProps<{ title: string, phone: string }>()
</script>

<template>
    <a :href="`tel:${phone}`" class="flex items-center gap-x-2.5">
        <span class="h-14 w-12.5 border border-blue/20 rounded-[10px] p-[5px]">
            <span class="bg-gradient-to-b from-blue-light to-white rounded-md h-full w-full flex items-center justify-center">
                <img src="~/assets/images/icons/calling.svg" alt="Calling icon">
            </span>
        </span>

        <span class="flex flex-col">
            <span class="text-b3 font-semibold text-blue">{{  title }}</span>

            <span :href="`tel:${phone}`" class="text-b3 font-medium">
                {{  phone }}
            </span>
        </span>
    </a>
</template>