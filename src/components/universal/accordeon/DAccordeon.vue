<script setup lang="ts">
import type { AccordeonItem } from '~/types/accordeon';
import DAccordeonItem from './DAccordeonItem.vue';

defineProps<{
    items: AccordeonItem[]
}>()

const activeId = ref<number | null>(0)

function chooseItem(i: number) {
    activeId.value = activeId.value === i ? null : i
}
</script>

<template>
    <div class="max-w-[630px] flex flex-col gap-5">
        <DAccordeonItem
            v-for="(item, i) in items"
            :key="i"
            v-bind="item"
            :active="activeId === i"
            @open="chooseItem(i)"
        />
    </div>
</template>