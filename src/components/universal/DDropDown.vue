<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const props = defineProps<{ title: string, options: { title: string, value: string }[] }>()

const selectedValue = ref('')

const selected = computed(() => props.options.find(item => item.value === selectedValue.value) || '')

onMounted(() => {
    if (props.options && props.options.at(0)) {
        selectedValue.value = props.options.at(0)!.value
    }
})

const [isOpen, toggleOpen] = useToggle(false)

function chooseOption(val: string) {
    selectedValue.value = val
    toggleOpen(false)
}
</script>

<template>
    <div class="relative">
        <div
            class="border border-gray-50 rounded-md px-6 py-4 bg-white relative flex items-center gap-2.5
                cursor-pointer hover:bg-blue-light transition-all duration-300 z-10"
            @click="toggleOpen()"
        >
            <div class="text-b1 font-medium">
                <span>{{ title }}: </span>
                <span v-if="selected">{{ selected.title }}</span>
            </div>

            <div class="w-6 relative">
                <div
                    class="h-0.5 w-3 bg-blue-dark absolute left-1/2 origin-left transition-all duration-300 -translate-x-[4%]"
                    :class="isOpen ? 'rotate-45 -translate-y-1' : '-rotate-45 translate-y-1'"
                />

                <div
                    class="h-0.5 w-3 bg-blue-dark absolute right-1/2 origin-right transition-all duration-300 translate-x-[4%]"
                    :class="isOpen ? '-rotate-45 -translate-y-1' : 'rotate-45 translate-y-1'"
                />
            </div>
        </div>

        <div
            class="w-full border border-gray-50 rounded-md p-2 absolute top-full left-0 bg-white transition-all duration-500"
            :class="isOpen ? 'translate-y-1' : 'invisible opacity-0 -translate-y-12'"
        >
            <div
                v-for="item in options"
                :key="item.value"
                class="text-b1 font-medium cursor-pointer hover:bg-blue-light/50 px-4 py-1 border-b border-gray-50/50
                    last-of-type:border-none transition-all duration-300"
                @click="chooseOption(item.value)"
            >
                {{ item.title }}
            </div>
        </div>
    </div>
</template>