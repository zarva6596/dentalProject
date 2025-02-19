<script setup lang="ts">
import type { DoctorCardItem } from '~/types/team'

defineProps<DoctorCardItem>()
</script>

<template>
    <div class="py-10 lg:py-12 lg:px-25 border-b border-gray-100 last-of-type:border-none">
        <div class="lg:flex lg:items-center lg:gap-8 bg-blue-light lg:bg-white rounded-lg">
            <div
                class="lg:max-w-[300px] w-full h-[350px] mb-10 lg:mb-0 overflow-hidden
                    rounded-b-none rounded-lg lg:rounded-b-lg shrink-0"
            >
                <img
                    :src="photo"
                    :alt="`${name}'s photo`"
                    class="h-full w-full object-cover object-center"
                />
            </div>

            <div class="px-5 pb-8 lg:px-0 lg:pb-0">
                <div class="flex flex-col lg:flex-row mb-7 lg:mb-6">
                    <h4 class="text-h4 font-semibold lg:mr-3 mb-2 lg:mb-0">
                        {{ name }}
                    </h4>

                    <span class="text-b2 font-normal">
                        ( {{ position }} )
                    </span>
                </div>

                <p class="text-b1 font-normal text-text mb-10 lg:mb-8">
                    {{ description }}
                </p>

                <div class="flex justify-center lg:block">
                    <DButton>
                        Book an appointment
                    </DButton>
                </div>
            </div>
        </div>
    </div>
</template>