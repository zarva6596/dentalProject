<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
    <ul>
        <li
            v-for="(item, key) in items"
            :key
            class="flex items-center mb-4 last-of-type:mb-0"
        >
            <div class="mr-2.5 h-5 aspect-square flex items-center justify-center">
                <img src="~/assets/images/icons/doneMark.svg" alt="List marker" />
            </div>

            <span class="text-b1 font-medium">
                {{ item }}
            </span>
        </li>
    </ul>
</template>