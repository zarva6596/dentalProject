<script setup lang="ts">
interface Props {
    photo: string
    name: string
    position: string
    message: string
    link: string
    icon: 'linkedIn' | 'facebook' | 'instagram'
}

const props = defineProps<Props>()

const iconPath = computed(() => {
    switch(props.icon) {
        case 'facebook':
            return ''
        case 'instagram':
            return ''
        case 'linkedIn':
            return '/icons/socialMedia/linkedIn.png'
        default:
            return ''
    }
})
</script>

<template>
    <div class="shadow-userMessageCard rounded-xl pt-3 px-5 pb-4">
        <div class="flex justify-between">
            <div class="flex items-center gap-x-2">
                <div class="rounded-full h-10 w-10 overflow-hidden">
                    <img :src="photo" :alt="`${name} photo`">
                </div>

                <div class="flex flex-col">
                    <span class="text-b3 font-medium">{{ name }}</span>

                    <span class="text-b4">{{ position }}</span>
                </div>
            </div>

            <a :href="link">
                <img :src="iconPath" :alt="`${icon} icon`" />
            </a>
        </div>

        <div class="mt-2.5 max-w-[300px]">
            <span class="text-b4">
                {{ message }}
            </span>
        </div>
    </div>
</template>