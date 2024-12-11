<script setup lang="ts">
import DToothIcon from './DToothIcon.vue';
</script>

<template>
    <div class="relative">
        <!-- CIRCLES -->
        <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]
                bg-gradient-to-b from-blue to-white rounded-full w-11/12 aspect-square
                    shadow-firstScreenCircle rotate-12"
        >
            <div
                class="bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square"
                style="width: calc(100% - 2px);"
            />

            <div
                v-for="i in 24"
                :key="i"
                class="h-8 w-[52%] absolute right-1/2 top-1/2 bg-white origin-right"
                :style="`transform: translateY(-50%) rotate(${i * 20}deg)`"
            />

            <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-gradient-to-b from-blue/60 to-white rounded-full w-3/4 aspect-square"
            >
                <div
                    class="bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style="width: calc(100% - 2px); height: calc(100% - 2px);"
                />

                <div
                    v-for="i in 24"
                    :key="i"
                    class="h-6 w-[52%] absolute right-1/2 top-1/2 -translate-y-1/2 bg-white origin-right"
                    :style="`transform: translateY(-50%) rotate(${i * 20}deg)`"
                /> 
            </div>
        </div>

        <!-- TOOTHS -->
        <DToothIcon class="absolute top-8 left-8" />
        <DToothIcon class="absolute -top-0 left-3/4 -rotate-12" />
        <DToothIcon class="absolute top-32 left-12 -rotate-45" />
        <DToothIcon class="absolute top-1/4 right-5 scale-90" />
        <DToothIcon class="absolute bottom-24 right-10 -rotate-12" />

        <!-- PHOTO -->
        <div class="relative w-full overflow-hidden">
            <img
                src="~/assets/images/pages/home/doctor.png"
                alt="Doctor photo"
                class="relative -left-16"
            >
        </div>
    </div>
</template>